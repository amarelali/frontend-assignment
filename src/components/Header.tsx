import Cookies from "js-cookie";

interface IProps {}
const Header = ({}: IProps) => {
  const logOut = () => {
    Cookies.remove("jwt");
    location.reload();
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-end mx-auto max-w-screen-xl">
          <button
            onClick={logOut}
            href="#"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log out
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
