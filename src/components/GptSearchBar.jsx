import { useSelector } from "react-redux";

import Lang from "../utils/languageConstant";

const GPTsearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 bg-white"
          type="text"
          placeholder={
            Lang[langKey]?.gptSearchPlaceHolder ||
            "What would you like to watch today?"
          }
        />
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {Lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchbar;
