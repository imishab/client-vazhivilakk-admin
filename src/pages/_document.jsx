import feather from "feather-icons";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    feather.replace(); // Initialize feather icons
  }, []);

  return (
    <Html lang="en">
      <>
        <Head>
          {/* App favicon */}
          <link rel="shortcut icon" href="../../assets/images/favicon.ico" />
          {/* App css */}
          <link
            href="../../assets/css/app.min.css"
            rel="stylesheet"
            type="text/css"
            id="app-style"
          />
          {/* Icons */}
          <link
            href="../../assets/css/icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../assets/css/custom.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
          />

          <link
            href="../../assets/libs/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../assets/libs/datatables.net-keytable-bs5/css/keyTable.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../assets/libs/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../../assets/libs/datatables.net-select-bs5/css/select.bootstrap5.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
      </>

      <body data-menu-color="light" data-sidebar="default">
        <Main />
        <NextScript />

        <script src="../../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
      </body>
    </Html>
  );
}
