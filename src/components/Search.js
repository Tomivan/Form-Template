import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { matchSorter } from "match-sorter";

export const Search = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  const list = [
    { category: ["Health"] },
    { category: ["E-commerce"] },
    { category: ["Education"] },
  ];

  return (
    <div>
      <form className="relative items-center">
        <input
          style={{ border: "1.5px solid lightgray" }}
          type="text"
          placeholder="Search Templates"
          className="h-8 py-2 pl-3 text-sm placeholder-gray-400 rounded-sm outline-none md:pl-6 md:pr-5 w-80 font-circular"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setResult(
              matchSorter(list, e.target.value, {
                keys: ["category"],
              })
            );
          }}
        />
        <button
          className="absolute text-3xl text-gray-400 bg-white border-none outline-none top-2 left-72 md:left-80"
          onSubmit={matchSorter}
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};