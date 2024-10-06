import { useEffect } from "preact/hooks";
import Header from "../components/Header";
import { axiosInstance } from "../config/axios.instance";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface IProps {}
const HomePage = ({}: IProps) => {
  const { user } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    console.log("user.. ",user); // undefined because of reloading page
    getNotes();
  }, []);

  const getNotes = async () => {
    const data = await axiosInstance.get(`/notes?populate=*&filters[user][id]=${52}`,{headers:{'Authorization': 'Bearer ' + Cookies.get('jwt')}});
    console.log(data);
  };
  return (
    <div>
      <Header />
      <div class="text-4xl text-yellow-500">Hello Tailwind CSS!</div>
    </div>
  );
};
export default HomePage;
