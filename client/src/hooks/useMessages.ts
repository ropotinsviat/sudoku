import { useMemo } from "react";
import { IPlayer } from "../types/types";
import { useAuth } from "../context/AuthContext";

const staticMessages = [
  "Hi everyone",
  "Yes",
  "No",
  "Thank you",
  "I shall be right back",
  "I'm stuck",
  "I'm going to finish this",
  "I'm done",
  "Bye",
];

export const useMessages = (players: IPlayer[]) => {
  const { user } = useAuth();

  return useMemo(
    () => [
      ...staticMessages,
      ...players.flatMap((player) =>
        player.userId !== user?.userId
          ? [
              `Hi, ${player.name}!`,
              `Well done, ${player.name}!`,
              `Thank you, ${player.name}!`,
            ]
          : []
      ),
    ],
    [players, user]
  );
};
