import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
interface Props {
  children: ReactNode;
}

export const RouterContext = createContext<null | {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}>(null);

const Router = ({ children }: Props) => {
  const [path, setPath] = useState(window.location.pathname);
  console.log("path : ", path);
  useEffect(() => {
    const pathChange = () => {
      setPath(window.location.pathname);
    };

    window.history.pushState({ data: path }, "", path);

    window.addEventListener("popstate", pathChange);

    return () => {
      window.removeEventListener("popstate", pathChange);
    };
  }, [path]);
  console.log(children);
  return (
    <RouterContext.Provider value={{ path, setPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
