import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import AppRouter from "../router/AppRouter";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
