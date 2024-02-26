import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setResData(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  };

  const handleAddToFavorite = (getCurrentItem) => {
    let copyFvrts = [...favoritesList];
    const index = copyFvrts.findIndex((item) => item.id === getCurrentItem.id);
    if (index === -1) {
      copyFvrts.push(getCurrentItem);
    } else {
      copyFvrts.splice(index);
    }

    setFavoritesList(copyFvrts);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        resData,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
