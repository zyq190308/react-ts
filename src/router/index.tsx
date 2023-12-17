import { createBrowserRouter } from "react-router-dom"

import Layout from "../pages/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import About from "../pages/About"
import Query from "../pages/Query"
import NotFound from "../pages/NotFound"

import Auth from "../components/Auth"
import Disabled from "../components/Disabled"

import Forbidden from "../pages/Forbidden"
import Counter from "../pages/Counter"
import Counter2 from "../pages/Counter2"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <Layout />
      </Auth>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about/:id",
        element: (
          <Disabled>
            <About />
          </Disabled>
        ),
      },
      {
        path: "query",
        element: <Query />,
      },
      {
        path: "count",
        element: <Counter />,
      },
      {
        path: "count2",
        element: <Counter2 />,
      },
      {
        path: "403",
        element: <Forbidden />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
