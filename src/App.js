import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Translator from "./components/Translator";
import Paraphraser from "./components/Paraphraser";
import Summarizer from "./components/Summarizer";
import Help from "./components/Help";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import ChatBox from "./components/ChatBox";

const RequireAuth = () => {
  const isLogin = localStorage.getItem("login");

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};
const UnRequireAuth = () => {
  const isLogin = localStorage.getItem("login");

  if (isLogin === "true") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "translator",
        element: <Translator />,
      },
      {
        path: "/chat-box",
        element: <ChatBox />,
      },
      {
        path: "/paraphraser",
        element: <Paraphraser />,
      },
      {
        path: "/summarizer",
        element: <Summarizer />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/auth",
    element: <UnRequireAuth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
