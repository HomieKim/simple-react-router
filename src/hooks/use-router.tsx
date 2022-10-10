import { Dispatch, SetStateAction, useContext } from 'react';
import { RouterContext } from '../router/custom-router';

interface ReturnType {
  path: string;
  setPath : Dispatch<SetStateAction<string>>;
  push : (url:string) => void;
}

const useRouter = () : ReturnType =>{
  const router = useContext(RouterContext);
  const {path, setPath} = router!;
  const push = (url:string) => {
    if(router?.path !== url) router?.setPath(url);
  }
  return {
    path:path,
    setPath: setPath,
    push:push,
  }
}

export default useRouter;