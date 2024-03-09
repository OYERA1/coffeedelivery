import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../_store";

export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </ReduxProvider>
  );
}
