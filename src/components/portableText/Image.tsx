import Image from "next/image";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "../../studio/client";
import { useNextSanityImage } from "next-sanity-image";

export function SanityImage(props: any) {

  const imageData: SanityAsset = props.value;
  const imageProps = useNextSanityImage(sanityClient, imageData);
  if (!!props.value) {
    return null;
  }

  return (
    <Image
      alt={imageData.alt}
      {...imageProps}
      style={{ width: "100%", height: "auto" }}
      sizes="(max-width: 800px) 100vw, 800px"
      placeholder="blur"
      blurDataURL={imageData.image.asset.metadata.lqip}
    />
  );
}
