import "../styles/tailwind.css";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";

import { wrapper } from "../redux/store";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
