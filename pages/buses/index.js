import Layout from "../../components/Layout";
import SearchMenu from "./searchMenu";
import Bunch from "./bunch";

const Buses = ({ bus }) => {
  return (
    <Layout>
      <SearchMenu />
      <Bunch />
    </Layout>
  );
};

Buses.getInitialProps = () => {
  let bus = "Delux";
  return { bus };
};

export default Buses;
