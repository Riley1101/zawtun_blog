import AllPosts from "@/components/allposts/AllPosts";
import CardList from "@/components/card/CardList";
import { Container } from "@/layouts/Container";
import { sanityClient } from "@/components/studio/client";
import { ArticleProps, Category } from "@/type";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";

interface BlogsProps {
  articles: ArticleProps[];
  categories: Category[];
}

const query = `{
  "articles":*[_type == "blog"]{
  title,
    slug,
    _id,
    _type,
    description,
    body,
    "categories":categories[0...10]->{title},
    author->{
      name
    }
},
  "categories":*[_type=="category"]
}`;

export default function Blog(props: BlogsProps) {
  const { articles, categories } = props;

  const [data, setData] = useState(articles);
  const [keyword, setKeyword] = useState("");
  const [currentCategories, setCurrentCategory] = useState("");

  useEffect(() => {
    if (keyword.length > 3) {
      let tmp = data.filter((e) =>
        e.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(tmp);
    } else {
      setData(articles);
    }
  }, [keyword]);

  useEffect(() => {
    if (currentCategories === "All") {
      setData(articles);
    } else if (currentCategories !== "") {
      let res: ArticleProps[] = [];

      articles.map((el) => {
        let eachCategory = el.categories;
        eachCategory?.map((item) => {
          if (item.title.toLowerCase() === currentCategories.toLowerCase()) {
            res.push(el);
          }
        });
      });

      // articles.forEach((el) => {
      //   let eachCategory = el.categories;
      //   eachCategory?.forEach((item) => {
      //     if (item.title.toLowerCase() === currentCategories.toLowerCase()) {
      //       res.push(el);
      //     }
      //   });
      // }
      //);
      setData(res);
    }
  }, [currentCategories]);

  let handleSearch = (event: any) => {
    setKeyword(event.target.value);
  };

  let handleFilterCategory = (title: string) => {
    setCurrentCategory(title);
  };

  return (
    <div>
      <Container>
        <Meta
          meta={{
            title: "Blog | Zaw Z Tun",
            image: "/images/meta_01.jpeg",
            description:
              "So you must ensure that every revolutionary idea you have goes into development with the appropriate rendering pattern.",
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
