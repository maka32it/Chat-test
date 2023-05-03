import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
//pages
import Favorite from "./pages/favorite/Favorite";
import Settings from "./pages/settings/Settings";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
//components
import Chat from "./components/chat/Chat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Chat />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
