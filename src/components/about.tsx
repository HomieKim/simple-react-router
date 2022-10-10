import React from "react";
import useRouter from '../hooks/use-router';

const About = () => {
  const {push} = useRouter();
  return (
    <>
      <div>about</div>
      <button onClick={() => push("/")}>go root</button>
    </>
  );
};

export default About;
