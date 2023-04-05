import AllPosts from "@/components/allposts/AllPosts";
import CardList from "@/components/card/CardList";
import { Container } from "@/layouts/Container";
import React from "react";

type Props = {};

export default function Blog({}: Props) {
  return (
    <div>
      <Container>
        <AllPosts />
        <CardList />
      </Container>
    </div>
  );
}
