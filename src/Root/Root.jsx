import { Outlet } from "react-router-dom"
import { Navbar } from "../components/HomeSection/Navbar"
import { Footer } from "../components/HomeSection/Footer"


export const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
