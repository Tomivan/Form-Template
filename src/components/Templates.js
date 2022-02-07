import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemplates } from "../redux/features/slice/templateSlice";
import { Pagination } from "./Pagination";

export const Templates = ({ list }) => {
  const dispatch = useDispatch();

  const { loading, errors } = useSelector((state) => state.templates);

  const errorMessage = errors ? (
    <h2 className="h-screen my-5 text-2xl font-bold text-center font-circular">
      Oops! An error occurred
    </h2>
  ) : (
    ""
  );

  useEffect(() => {
    const getAllTemplates = async () => {
      const res = await dispatch(getTemplates());
      console.log(res);
      // console.log("list", list);
    };
    getAllTemplates();
  }, [dispatch]);

  if (list.length > 0) list = list.slice(0, 21);

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800 font-circular">
          All templates
        </h3>
        <h4 className="text-sm font-medium text-gray-500 font-circular">
          2000 templates
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center my-4">
        {errorMessage}
        {list.length < 1 && loading ? (
          <h2 className="h-screen my-5 text-2xl font-bold text-center font-circular">
            Loading Templates...
          </h2>
        ) : (
          list.map(({ category, key, description, name, link }) => {
            return (
              <div key={key} id={category} className="my-4 lg:w-1/3 sm:w-1/2">
                <div className="flex flex-col w-11/12 pt-8 mx-3 bg-white border-2 border-gray-300 rounded-md max-h-80 shadow-list md:shadow-md">
                  <h3 className="px-4 mb-4 text-2xl font-bold capitalize font-circular">
                    {name}
                  </h3>
                  <p className="px-4 font-normal font-Inter text-neautraltext">
                    {description}
                  </p>
                  <br />
                  <a
                    href={link}
                    className="p-4 mt-5 font-normal leading-6 no-underline bg-linkgray font-circular rounded-b-md text-linkgreen"
                  >
                    Use Template
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination />
    </div>
  );
};