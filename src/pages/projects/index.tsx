import AllPosts from "@/components/allposts/AllPosts";
import CardList from "@/components/card/CardList";
import { sanityClient } from "@/components/studio/client";
import { Container } from "@/layouts/Container";
import React, { useEffect, useState } from "react";
import { ArticleProps, Category } from "@/type";
import Meta from "@/components/Meta";
import { urlFor } from "@/components/studio/sanity_utils";
interface ProjectProps {
  articles: ArticleProps[];
  categories: Category[];
}

const query = `{"articles":*[_type == "project"]{
  title,
    slug,
    _id,
    _type,
    "categories":categories[0...10]->{title},
    body,
    description,
    author->{
      name
    }
},
  "categories":*[_type=="category"]
}`;

export default function Projects(props: ProjectProps) {
  const { articles, categories } = props;

  const [data, setData] = useState(articles);
  const [keyword, setKeyword] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    // search filter logic
    if (keyword.length > 3) {
      let temp = data.filter((el) =>
        el.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(temp);
    } else {
      setData(articles);
    }
  }, [keyword]);

  useEffect(() => {
    if (currentCategory == "All") {
      setData(articles);
    } else if (currentCategory !== "") {
      // category filter logic
      let res: ArticleProps[] = [];

      articles.forEach((item) => {
        let eachCategory = item.categories;
        eachCategory?.forEach((cate) => {
          if (cate.title.toLowerCase() === currentCategory) {
            res.push(item);
          }
        });
      });
      setData(res);
    }
  }, [currentCategory]);

  const handleFilterCategory = (title: string) => {
    setCurrentCategory(title);
  };
  const handleSearch = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <Meta
        meta={{
          title: "Project | Zaw Z Tun",
          image: "/images/meta_04.jpeg",
          description:
            "So you must ensure that every revolutionary idea you have goes into development with the appropriate rendering pattern.",
        }}
      ></Meta>
      <Container>
        <AllPosts
          categories={categories}
          handleSearch={handleSearch}
          handleFilterCategory={handleFilterCategory}
        />
        <CardList blogs={data} />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(query);

  return {
    props: {
      ...data,
    },
  };
}
