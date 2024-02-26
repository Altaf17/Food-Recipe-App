import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        {" "}
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          FoodRecipe
        </NavLink>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          placeholder="Enter Items..."
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-green-600"
        >
          Search
        </button>
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline 2px red" : "",
            })}
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline 2px red" : "",
            })}
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
