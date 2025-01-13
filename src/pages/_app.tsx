import Analytics from "@/components/Analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
