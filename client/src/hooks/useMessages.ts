import { useMemo } from "react";
import { IPlayer } from "../types/Player";
import { useSelector } from "react-redux";
import { staticMessages } from "../constants/staticMessages";
import { selectAuthUser } from "../redux/selectors/authSelectors";

export const useMessages = (players: IPlayer[]) => {
  const user = useSelector(selectAuthUser);

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
