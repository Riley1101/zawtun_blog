import AllPosts from "@/components/allposts/AllPosts";
import CardList from "@/components/card/CardList";
import { sanityClient } from "@/studio/client";
import { Container } from "@/layouts/Container";
import React, { useEffect, useState } from "react";
import { ArticleProps, Category } from "@/type";
import Meta from "@/components/Meta";

interface SnippetsProps {
  articles: ArticleProps[];
  categories: Category[];
}

const query = `{"articles":*[_type == "snippet"]{
  title,
    slug,
    _id,
    _type,
    "categories":categories[0...10]->{title},
    body,
    description,
        publishedAt,
    author->{
      name
    },
    "readingTime": round(length(pt::text(body)) / 5 / 240 ),
},
  "categories":*[_type=="category"]
}`;
export default function Snippets(props: SnippetsProps) {
  const { articles, categories } = props;

  const [data, setData] = useState(articles);
  const [keyword, setKeyword] = useState("");
  const [currentCategories, setCurrentCategory] = useState("");

  useEffect(() => {
    if (keyword.length > 3) {
      const temp = data.filter((el) =>
        el.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(temp);
    } else {
      setData(articles);
    }
  }, [keyword]);

  useEffect(() => {
    if (currentCategories == "All") {
      setData(articles);
    } else if (currentCategories !== "") {
      let res: ArticleProps[] = [];
      articles.forEach((el) => {
        let eachCategory = el.categories;
        eachCategory?.forEach((item) => {
          if (item.title.toLowerCase() == currentCategories.toLowerCase()) {
            res.push(el);
          }
        });
      });
      setData(res);
    }
  }, [currentCategories]);

  const handleSearch = (e: any) => {
    setKeyword(e.target.value);
  };

  const handleFilterCategory = (title: string) => {
    setCurrentCategory(title);
  };

  return (
    <div>
      <Container>
        <Meta
          meta={{
            title: "Snippets | Zaw Z Tun",
            image: "/images/meta_06.jpeg",
          }}
        ></Meta>
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
    revalidate: 10,
  };
}
