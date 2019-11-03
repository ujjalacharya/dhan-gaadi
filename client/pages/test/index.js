import Layout from "../../components/Layout";

const Test = ({ user }) => {
  return (
    <Layout>
      <h1>Hello {user}</h1>
    </Layout>
  );
};

Test.getInitialProps = () => {
  let user = "Ujjal";
  return { user };
};

export default Test;
