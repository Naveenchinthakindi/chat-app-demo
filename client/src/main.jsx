import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <div className="main-app">
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </div>
);
