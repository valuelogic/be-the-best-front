import type { NextPage } from "next";
import Header from "../components/layout/header/Header";

const styles = {
  app: {
    fontFamily: "Arial",
    margin: 0,
  } as React.CSSProperties,
};

const Home: NextPage = () => {
  return (
    <div style={styles.app}>
      <Header />
    </div>
  );
};

export default Home;
