import { createBrowserRouter } from "react-router";
import Chat from "@/pages/Chat";
import Home from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "/chat",
    Component: Chat,
  },
]);

export default router;
