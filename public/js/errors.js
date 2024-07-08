var __reportClientSideErrorsDisabled = 0;
function handleJsClientSideErrors() {
	// Set error handling
	window.onerror = function (message, url, line, column, errorObj) {
		// Check if auto-restore is disabled
		if (__reportClientSideErrorsDisabled === 1)
			return true;

		// Handle errors
		var logUrl = window.location.origin + "/Account/ReportJsError";
		if (!logUrl.includes("app") && !logUrl.includes("localhost"))
			return; // only for app websites (/Account requires login) and localhost
		var pageUrl = window.location.href;
		var codeUrl = '';
		if (typeof url !== 'undefined')
			codeUrl = url;
		var codeLine = '';
		if (typeof line !== 'undefined')
			codeLine = line;
		var codeStack = '';
		if ((null !== errorObj) && (typeof errorObj !== 'undefined') && (null !== errorObj.stack) && (typeof errorObj.stack !== 'undefined'))
			codeStack = errorObj.stack;
		var scriptSrc = '';
		if ((typeof document.currentScript !== 'undefined') && (null !== document.currentScript))
			scriptSrc = document.currentScript.src;
		var fullMessage = `${message} - url '${codeUrl}' - line '${codeLine}' - stack '${codeStack}' - source '${scriptSrc}'`;
		console.error(fullMessage);
		alert(fullMessage);
		$.ajax({
			url: logUrl, type: 'POST', data: {
				workspaceId: __workspaceId,
				message: fullMessage,
				url: pageUrl
			}
		});
		return false;
	};
}
handleJsClientSideErrors();