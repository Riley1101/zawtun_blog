import Meta from "@/components/Meta";
import { PostDetail } from "@/components/post/PostDetail";
import { sanityClient } from "@/studio/client";
import { Container } from "@/layouts/Container";
import React from "react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";

const query = `*[_type == "snippet" && slug.current == $slug][0]{
  ...,
  }`;
type Props = {
  data: {
    mainImage: SanityAsset;
    [key: string]: any;
  };
};

const Post = ({ data }: Props) => {
  const nextImage = useNextSanityImage(sanityClient, data?.mainImage);
  return (
    // <Container>
    //   <Meta
    //     meta={{
    //       title: data?.title,
    //       image: urlFor(data?.mainImage).width(600).url(),
    //       description: data?.description,
    //     }}
    //   ></Meta>
    //   <PostDetail data={data} />
    //   <></>
    // </Container>

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
  const res = await sanityClient.fetch(query, { slug: slug });
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
  const urlQuery = `*[_type == "snippet"]{slug}`;
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
