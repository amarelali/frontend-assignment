import Header from "../components/Header";

interface IProps {}
const HomePage = ({}: IProps) => {
  return (
    <div>
      <Header />
      <div class="text-4xl text-yellow-500">Hello Tailwind CSS!</div>
    </div>
  );
};
export default HomePage;
