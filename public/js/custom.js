$(function () {
	'use strict';

	// Hide the preloader
	$(function () {
		$('.preloader').hide();
	});

	// Show the preloader
	window.addEventListener('beforeunload', function (e) {
		// Show loading
		$('.preloader').show();

		// Check if disabled
		if (__preloadForever === 1)
			return; // do not stop the loading animation
		setTimeout(function () { $('.preloader').hide(); }, 1500); // timeout - download can trigger beforeunload without any navigation
	});

	// Top header and sidebar
	var setTopHeaderAndSideBar = function () {
		var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
		if (width < 1600) {
			$('body').addClass('mini-sidebar');
			$('.navbar-header').hide();
			$('.sidebartoggler i').addClass('ti-menu');
		} else {
			$('body').removeClass('mini-sidebar');
			$('.navbar-header').show();
		}
		var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
		if (height < 1) height = 1;
		$('.page-wrapper').css('min-height', (height) + 'px');
	};
	$(window).on('resize', setTopHeaderAndSideBar);

	// Handle menu category clicks when showing the mini-sidebar (not the full sidebar)
	$('.has-arrow').click(function () {
		if ($('body').hasClass('mini-sidebar') && !isTouchDevice()) {
			var href = $(this).parent().find('.collapse a').first().attr('href');
			if (!emptyString(href))
				window.location.href = href;
		}
	});

	// Side bar toggle
	$('.sidebartoggler').on('click', function () {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').trigger('resize');
			$('body').removeClass('mini-sidebar');
			$('.navbar-header').show();
			$.cookie('fullMode', '1', { path: '/' });
		} else {
			$('body').trigger('resize');
			$('body').addClass('mini-sidebar');
			$('.navbar-header').hide();
			$.cookie('fullMode', '0', { path: '/' });
		}
	});

	// Set side bar toggle on load
	function setSideBarToggleOnLoad() {
		var fullMode = $.cookie('fullMode');
		if (emptyString(fullMode))
			return;
		if (('0' === fullMode) && !$('body').hasClass('mini-sidebar'))
			$('.sidebartoggler').trigger('click');
		if (('1' === fullMode) && $('body').hasClass('mini-sidebar')) {
			var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
			if (width >= 1600)
				$('.sidebartoggler').trigger('click');
		}
	}

	// Set top header and side bar
	$(setTopHeaderAndSideBar);
	$(setSideBarToggleOnLoad);

	// Search box
	$('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
		$('.app-search').toggle(200);
	});

	// Right sidebar options
	$('.right-side-toggle').click(function () {
		$('.right-sidebar').slideDown(50);
		$('.right-sidebar').toggleClass('shw-rside');
	});

	// Auto select left navbar
	$(function () {
		var url = window.location;
		var element = $('ul#sidebarnav a').filter(function () {
			return this.href == url;
		}).addClass('active').parent().addClass('active');
		while (true) {
			if (element.is('li')) {
				element = element.parent().addClass('in').parent().addClass('active');
			} else {
				break;
			}
		}
	});

	// Resize elements
	$('body').trigger('resize');
	$('#main-wrapper').css('display', '');

	// Tooltips
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// Popovers
	$(function () {
		$('[data-toggle="popover"]').popover();
	});

	// Sidebar menu
	$(function () {
		$('#sidebarnav').AdminMenu();
	});

	// Collapsible elements
	$('a[data-action="collapse"]').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
		$(this).closest('.card').children('.card-body').collapse('toggle');
	});

	// Toggle fullscreen
	$('a[data-action="expand"]').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
		$(this).closest('.card').toggleClass('card-fullscreen');
	});

	// Close card
	$('a[data-action="close"]').on('click', function () {
		$(this).closest('.card').removeClass().slideUp('fast');
	});
});

function isTouchDevice() {
	return ('ontouchstart' in document.documentElement);
}