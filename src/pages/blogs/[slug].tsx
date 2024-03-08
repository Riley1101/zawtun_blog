import { Container } from "@/layouts/Container";

import React from "react";
import { PostDetail } from "@/components/post/PostDetail";
import { sanityClient } from "@/studio/client";
import Meta from "@/components/Meta";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";

type Props = {
  data: {
    mainImage: SanityAsset;
    [key: string]: any;
  };
};

const query = `*[_type == "blog" && slug.current == $slug][0]{
  ...,
  }`;

const Post = ({ data }: Props) => {
  const nextImage = useNextSanityImage(sanityClient, data?.mainImage);
  return (
    <Container>
      <Meta
        meta={{
          title: data?.title,
          image: nextImage?.src,
          description: data?.description,
        }}
      ></Meta>
      <PostDetail data={data} />
    </Container>
  );
};
export default Post;

export async function getStaticProps(context: any) {
  const { slug } = context.params;

  const res = await sanityClient.fetch(query, {
    slug: slug,
  });

  return {
    props: {
      data: res,
    },
    revalidate: 10,
  };
}

interface ShortSlug {
  slug: {
    current: string;
  };
}

export async function getStaticPaths() {
  const urlQuery = `*[_type == "blog" ]{ slug }`;
  const renderPages: ShortSlug[] = await sanityClient.fetch(urlQuery);
  const paths = renderPages.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
