import { RouterProvider, createRouter, createRootRoute, Outlet } from "@tanstack/react-router"
import NavbarComponent from "./component/NavbarComponent"
import FooterComponent from "./component/FooterComponent"


//create root route

const rootRoute = createRootRoute ({
  component: () => (
    <div>
      <NavbarComponent/>
      <Outlet/>
      <FooterComponent/>
    </div>
  )
})

//combine routes into route tree

const routeTree = rootRoute.addChildren([])


function App() {

  return (
    <div>

            
    </div>
  )
}

export default App