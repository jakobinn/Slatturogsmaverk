import Head from 'next/head'

const DocumentHead = (): JSX.Element => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sláttur og smáverk veitir faglega þjónustu á sanngjörnu verði. Við tökum að okkur garðslátt, beðahreinsun, trjáklippingar svo eitthvað sé nefnt."
        />
        <meta name="theme-color" content="#29ad29"></meta>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon32.png"
        />
        <script src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-194144458-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-194144458-1');`,
          }}
        />

        <title>Sláttur & smáverk</title>
      </Head>
    </div>
  )
}

export default DocumentHead
