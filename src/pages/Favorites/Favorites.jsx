import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../Components/recipe-item/RecipeItem";

const Favorites = () => {
  const { favoritesList, recipeDetailsData, handleAddToFavorite } =
    useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => {
          return <RecipeItem item={item} key={item.id} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show please Add your Favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
