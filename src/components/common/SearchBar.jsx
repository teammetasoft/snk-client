import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-8 max-w-[300px] bg-white rounded-full border border-gray-200 px-3 py-1  focus-within:ring-1 focus-within:ring-gray-400"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search anything..."
        className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
      />
      <button type="submit">
        <FiSearch className="text-gray-400 text-lg hover:text-gray-600" />
      </button>
    </form>
  );
};

export default SearchBar;
