import React from "react";
import Profile from "./Profile";
import { Container } from "@/layouts/Container";
import { sanityClient } from "@/studio/client";
import Meta from "@/components/Meta";

export interface UserProps {
  title: string;
  body: string[];
  description: string;
}

const query = `*[_type == "about"][0]{
  title,
    description,
    body,
    author->{
      name
    }
}`;

interface Props {
  user: UserProps;
}
const About = (props: Props) => {
  const { user } = props;
  // const { title, body, author, description } = user;
  return (
    <div>
      <Container>
        <Meta
          meta={{
            title: "About | Zaw Z Tun",
            image: "/zzt.jpeg",
            description:
              "I am currently a Freelence Web Developer. My background is Cisco certified Network Engineer.",
          }}
        ></Meta>
        <Profile
          title={user.title}
          body={user.body}
          name={user.title}
          description={user.description}
        />
      </Container>
    </div>
  );
};
export default About;

export async function getStaticProps() {
  const data: UserProps = await sanityClient.fetch(query);
  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
}
