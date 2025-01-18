import { FC } from "react";
import "../style/App.css";
import AppRouter from "../router/AppRouter";
import { Header } from "../../shared/components/header";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
