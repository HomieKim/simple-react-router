import React from "react";
import useRouter from '../hooks/use-router';

const Root = () => {
  const {push} = useRouter();
  return (
    <>
      <div>root</div>
      <button onClick={()=> push('/about')}>go about</button>
    </>
  );
};

export default Root;
