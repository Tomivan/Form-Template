import React, { useState } from "react";

export const Sort = ({ handleSort }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form className="flex items-center text-sm md:text-base font-circular">
        <p className="hidden text-sm font-normal text-gray-400 md:mr-8 md:block">
          Sort By:{" "}
        </p>
        <div className="mr-3 md:mr-6">
          <fieldset
            className="px-2 py-1 text-gray-400 rounded-sm md:px-4"
            style={{ border: "1.5px solid lightgray" }}
          >
            <legend className="text-xs">Category</legend>
            <select
              value={value}
              className="px-0 py-1 text-black bg-white border-none outline-none font-Inter md:px-4"
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="All">All</option>
              <option
                className="text-base"
                value="Health"
                onClick={() => setValue("Health")}
              >
                Health
              </option>
              <option
                className="text-base"
                value="Education"
                onClick={() => setValue("Education")}
              >
                Education
              </option>
              <option
                className="text-base"
                value="E-Commerce"
                onClick={() => setValue("E-Commerce")}
              >
                E-Commerce
              </option>
            </select>
          </fieldset>
        </div>

        <div className="mr-3 md:mr-6">
          <fieldset
            className="px-2 py-1 text-gray-400 rounded-sm md:px-4"
            style={{ border: "1.5px solid lightgray" }}
          >
            <legend className="text-xs">Order</legend>
            <select className="px-0 py-1 text-black bg-white border-none outline-none font-Inter md:px-4">
              <option value="Default">Default</option>
            </select>
          </fieldset>
        </div>

        <div>
          <fieldset
            className="px-2 py-1 text-gray-400 rounded-sm md:px-4"
            style={{ border: "1.5px solid lightgray" }}
          >
            <legend className="text-xs">Date</legend>
            <select className="px-0 py-1 text-black bg-white border-none outline-none font-Inter md:px-4">
              <option value="Default">Default</option>
            </select>
          </fieldset>
        </div>
      </form>
    </div>
  );
};