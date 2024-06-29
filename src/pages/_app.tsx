import "@/styles/globals.css";
import "@/components/hero/Hero.scss";
import "@/components/header/Header.scss";
import "@/components/explainBlock/ExplainBlock.scss";
import "@/components/constructionBlock/ConstructionBlock.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
