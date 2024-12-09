import React from "react";

const HomePage = React.lazy(() => import("../pages/home-page/HomePage"));
const CreateGamePage = React.lazy(
  () => import("../pages/create-game-page/CreateGamePage")
);
const GamesPage = React.lazy(() => import("../pages/games-page/GamesPage"));
const PrivacyPolicyPage = React.lazy(
  () => import("../pages/privacy-policy-page/PrivacyPolicyPage")
);
const GamePage = React.lazy(() => import("../pages/game-page/GamePage"));

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
    path: "/privacy-policy",
    component: PrivacyPolicyPage,
    exact: true,
  },
  {
    path: "/:gameId",
    component: GamePage,
    exact: true,
  },
];

export default routes;
