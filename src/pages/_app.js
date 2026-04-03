import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

import { useEffect } from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "../theme"

import { SessionProvider } from "next-auth/react"
import Router, { useRouter } from "next/router"
import NProgress from "nprogress"

import * as gtag from "src/libs/gtag"
import Container from "@/components/layout/container"
import ContextProvider from "src/context"
import { isProduction } from "src/constanst/development"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      if (isProduction) {
        gtag.pageview(url)
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <ContextProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ContextProvider>
        </ChakraProvider>
      </SessionProvider>

      {/* Third-party scripts — only loaded in production and only if env vars are set */}
      {isProduction && gtag.GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      {isProduction && gtag.ADSENSE_PUBLISHER_ID && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gtag.ADSENSE_PUBLISHER_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      )}

      <Analytics debug={false} />
      <SpeedInsights debug={false} />
    </>
  )
}

export default MyApp
