import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";

export default function Layout() {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	);
}
