import React, { ReactNode } from 'react';
import useRouter from '../hooks/use-router';
interface Props {
  to:string,
  element:ReactNode,
}
const Route = ({to, element}:Props) =>{
  const {path} = useRouter();
  if(path !== to) return null;
  return (
    <div>{element}</div>
  )
}

export default Route;