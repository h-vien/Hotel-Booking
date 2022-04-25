import { Layout } from "antd";
import Navbar from "../../components/Navbar/Navbar";
const { Header, Content, Footer } = Layout;
const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Navbar />
      </Header>
      <Content className="site-layout pb-24 mt-16">{children}</Content>
    </Layout>
  );
};

export default HomeLayout;
