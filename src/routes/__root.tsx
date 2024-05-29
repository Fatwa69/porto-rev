import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/home" className="[&.active]:font-bold"></Link>{" "}
        <Link to="/about" className="[&.active]:font-bold"></Link>{" "}
        <Link to="/produk" className="[&.active]:font-bold"></Link>{" "}
        <Link to="/testimonial" className="[&.active]:font-bold"></Link>
      </div>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  ),
});
