import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Main from "./pages/Main";
import { PokeListProvider } from "./providers/PokeListProvider";
import { OffestvalueContext, OffsetValueProvider } from "./providers/OffsetValueProvider";
import PokeByType from "./pages/PokeByType";
import PokeDisplayChar from "./pages/PokeDisplayChar";
import { StatusProvider } from "./providers/StatusProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/types/:type", element: <PokeByType /> },
        { path: "/:pokename", element: <PokeDisplayChar /> },
      ],
    },
  ]);

  return (
    <div className="container">
      <OffsetValueProvider>
        <PokeListProvider>
          <StatusProvider>
            <RouterProvider router={router} />
          </StatusProvider>
        </PokeListProvider>
      </OffsetValueProvider>
    </div>
  );
}

export default App;
