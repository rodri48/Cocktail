import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const NewProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.drinks, "data");
        setPosts(data.drinks);
      });
  }, []);

  return <Context.Provider value={posts}>{children}</Context.Provider>;
};

export default Context;
