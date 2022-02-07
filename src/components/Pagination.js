import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";

export const Pagination = () => {
  const [pages, setPages] = useState(1);

  return (
    <div className="flex items-center justify-between px-4 mb-3 text-neautraltext font-circular">
      <button
        className={`font-medium text-base border-none ${
          pages === 1 ? "cursor-not-allowed" : ""
        } bg-white outline-none focus:outline-none`}
        onClick={() => setPages(pages - 1)}
      >
        Previous
      </button>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-base font-medium bg-white border rounded">
          {pages}
        </button>
        <h3 className="text-base font-normal">of 200</h3>
      </div>
      <button
        className={`font-medium text-base flex items-center border-none ${
          pages === 1 ? "cursor-pointer" : ""
        } bg-white outline-none focus:outline-none`}
        onClick={() => setPages(pages + 1)}
      >
        Next
        <GrFormNext className="ml-2" />
      </button>
    </div>
  );
};