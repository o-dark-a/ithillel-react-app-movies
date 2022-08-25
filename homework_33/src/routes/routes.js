import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Songs = lazy(() => import("../pages/Songs/Songs"));
const Login = lazy(() => import("../pages/Login/Login"));
const FavoritesSongs = lazy(() => import("../pages/FavoritesSongs/FavoritesSongs"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function getComponent(Component) {
  const TOKEN = localStorage.getItem("AUTH_TOKEN");
  return TOKEN ? (
    <Suspense>
      <Component />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
}

export const routes = [
  {
    path: "/",
    element: getComponent(Songs),
  },
  {
    path: "login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "favorites",
    element: getComponent(FavoritesSongs),
  },
  {
    path: "*",
    element: getComponent(NotFound),
  },
];
