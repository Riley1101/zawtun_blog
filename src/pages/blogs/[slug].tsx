import { Container } from "@/layouts/Container";

import React from "react";
import { PostDetail } from "@/components/post/PostDetail";
import { sanityClient } from "@/components/studio/client";
import Meta from "@/components/Meta";
import { urlFor } from "@/components/studio/sanity_utils";

type Props = { data: any };

const query = `*[_type == "blog" && slug.current == $slug][0]{
  ...,
  }`;

const Post = ({ data }: Props) => {
  return (
    <Container>
      <Meta
        meta={{
          title: data.title,
          image: urlFor(data.mainImage).width(600).url(),
          description: data.description,
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
    fallback: false,
  };
}
