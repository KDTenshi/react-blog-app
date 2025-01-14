import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { PostCardsList } from "../../components/postCardsList";

const App: FC = () => {
  return (
    <>
      <Header />
      <PostCardsList />
    </>
  );
};

export default App;
