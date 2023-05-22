import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/components/home/Hero";
import { Container } from "@/layouts/Container";
import CardList from "@/components/card/CardList";

import { ArticleProps, Category } from "@/type";
import { sanityClient } from "@/studio/client";
import Meta from "@/components/Meta";
import PjCardList from "@/components/card/PjCardList";

interface HomeProps {
  blogs: ArticleProps[];
  projects: ArticleProps[];
  categories: Category[];
}

const query = `{
  "blogs":*[_type == "blog"][0..3]{
  title,
    slug,
    _id,
    _type,
    body,
    'mainImage':mainImage.asset->url,
    description,
        publishedAt,
    author->{
      name
    }, 
    "readingTime": round(length(pt::text(body)) / 5 / 180 ),
},

"projects":*[_type == "project"][0..3]{
  title,
    slug,
    _id,
    _type,
    body,
    'mainImage':mainImage.asset->url,
    description,
        publishedAt,
    
    author->{
      name
    },
    "readingTime": round(length(pt::text(body)) / 5 / 180 ),
},
  "categories":*[_type=="category"]
}`;

export default function Home(props: HomeProps) {
  const { blogs, projects } = props;
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Container>
          <Meta
            meta={{
              title: "Home| Zaw Z Tun",
              image: "/zzt.jpeg",
              description:
                "I am currently a Freelence Web Developer. My background is Cisco certified Network Engineer.",
            }}
          ></Meta>

          <Hero />
          <PjCardList blogs={projects} />
          <CardList blogs={blogs} />
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(query);
  console.log(data);
  return {
    props: {
      ...data,
    },
    revalidate: 10,
  };
}
