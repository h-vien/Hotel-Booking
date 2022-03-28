import { Breadcrumb, Layout } from "antd";
import Navbar from "../../components/Navbar/Navbar";
const { Header, Content, Footer } = Layout;
const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Navbar />
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Hotel Booking Website by @VMH group
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
