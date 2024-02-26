import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../Components/recipe-item/RecipeItem";

const Home = () => {
  const { loading, resData } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading.. Please wait</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {resData && resData.length > 0 ? (
        resData.map((item) => {
          return <RecipeItem item={item} key={item.id} />;
        })
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show please search something
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
