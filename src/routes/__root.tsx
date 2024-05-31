import { createRootRoute, Outlet } from "@tanstack/react-router";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  ),
});
