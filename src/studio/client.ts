import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: false,
  apiVersion: "v2021-10-21",
  // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
export { sanityClient };
