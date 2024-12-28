import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home-page/HomePage"));
const CreateGamePage = lazy(
  () => import("../pages/create-game-page/CreateGamePage")
);
const GamesPage = lazy(() => import("../pages/games-page/GamesPage"));
const GamePage = lazy(() => import("../pages/game-page/GamePage"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/create",
    component: CreateGamePage,
    exact: true,
  },
  {
    path: "/games",
    component: GamesPage,
    exact: true,
  },
  {
    path: "/:gameId",
    component: GamePage,
    exact: true,
  },
];

export default routes;
