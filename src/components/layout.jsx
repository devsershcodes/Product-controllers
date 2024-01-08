/* eslint-disable react/prop-types */
import {Outlet} from "react-router-dom"

const NavRoutes = ({children}) => {
  return children ? children : <Outlet/>
}

export default NavRoutes ;