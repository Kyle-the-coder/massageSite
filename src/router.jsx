import { createBrowserRouter } from "react-router-dom";
import { NavLayout } from "./layouts/NavLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { landingRoute } from "./pages/LandingPage/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: "/", ...landingRoute },

      //   {
      //     path: "/admin",
      //     element: (
      //       <ProtectedRoute>
      //         <AdminMain />
      //       </ProtectedRoute>
      //     ),
      //   },
    ],
  },
]);
