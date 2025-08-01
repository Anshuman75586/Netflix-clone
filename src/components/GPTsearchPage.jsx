import { BG_URL } from "../utils/constants";
import GPTmovieSUggestions from "./GPTmovieSUggestions";
import GPTsearchbar from "./GPTsearchbar";

const GPTsearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background" />
      </div>
      <GPTsearchbar />
      <GPTmovieSUggestions />
    </div>
  );
};

export default GPTsearchPage;
