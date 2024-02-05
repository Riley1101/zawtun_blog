import Head from "next/head";
import React from "react";

type Props = {
  meta: {
    title: string;
    description?: string;
    image?: string;
    url?: string;
  };
};

const defaultMeta = {
  title: "Zaw Z Tun",
  description:
    "I am a Full Stack Engineer. My background is Cisco certified Network Engineer.",
  image: "/zzt.jpeg",
  url: "https://metatags.io/",
};
export default function Meta({ meta = defaultMeta }: Props) {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={meta.title} />
      <meta content={meta.description} property="twitter:description" />
      <meta property="twitter:image" content={meta.image}></meta>
    </Head>
  );
}
