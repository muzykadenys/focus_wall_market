import "@/styles/globals.css";
import "@/components/hero/Hero.scss";
import "@/components/header/Header.scss";
import "@/components/explainBlock/ExplainBlock.scss";
import "@/components/constructionBlock/ConstructionBlock.scss";
import "@/components/flagsBlock/FlagsBlock.scss";
import "@/components/contactBlock/ContactBlock.scss";
import "@/components/carouselEl/CarouselEl.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
