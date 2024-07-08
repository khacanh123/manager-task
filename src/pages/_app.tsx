import "styles/globals.css";
import type { AppProps } from "next/app";
import "styles/styles.css";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <>
          <link rel="stylesheet" href="/css/autoComplete.02.min.css" />
          <link rel="stylesheet" href="/css/blue.css" />
          <link rel="stylesheet" href="/css/bootstrap-datepicker.min.css" />
          <link rel="stylesheet" href="/css/bootstrap-datetimepicker.min.css" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/forms.css" />
          <link rel="stylesheet" href="/css/hopscotch.min.css" />
          <link rel="stylesheet" href="/css/horizontal-timeline.css" />
          <link rel="stylesheet" href="/css/jquery-ui.css" />
          <link rel="stylesheet" href="/css/jquery.toast.css" />
          <link rel="stylesheet" href="/css/loading.css" />
          <link rel="stylesheet" href="/css/selectize.min.css" />
          <link rel="stylesheet" href="/css/steps.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/stylish-tooltip.css" />
          <link rel="stylesheet" href="/css/sweetalert.css" />
          <link rel="stylesheet" href="/css/sprinner.css" />
          <link rel="stylesheet" href="/css/timeline-vertical-horizontal.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/themify-icons/0.1.2/css/themify-icons.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />

          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script src="/js/custom.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        </> */}
        <link rel="stylesheet" href="" />
      </Head>
      <Component {...pageProps} />


    </>
  );
}
