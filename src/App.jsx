import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/header'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/profile",
    element:<Profile/>,
  },
  {
    path:"/sign-up",
    element:<SignUp/>,
  },
  {
    path:"/sign-in",
    element:<SignIn/>,
  },
])

export default function App() {
  return (
    
    <div>
      <Header/>
      <RouterProvider router={router}/>
    </div>
  )
}
