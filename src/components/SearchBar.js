import { useState } from "react";

function SearchBar({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    }
    return (
        <form onSubmit={handleSubmit} className="flex">
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="p-2 border rounded-l w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Search
          </button>
        </form>
    );
}

export default SearchBar;