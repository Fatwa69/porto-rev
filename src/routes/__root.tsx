import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration/>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  ),
});
