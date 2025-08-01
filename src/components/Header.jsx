import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userslice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTslice";
import { ChangeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  const handleGPTSearchclick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
              value={langKey}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-4 py-2 mx-4 rounded-lg cursor-pointer bg-red-600 text-white"
            onClick={handleGPTSearchclick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 mx-2 rounded-full"
            src={USER_ICON}
            alt="user icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold cursor-pointer text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
