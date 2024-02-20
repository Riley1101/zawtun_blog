import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./client";
export async function getProjects() {
  let data = await sanityClient.fetch("*");
  return data;
}

import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: SanityAsset) {
  const image = builder.image(source);
  return image;
}
