import { useEffect, useState } from "react";
import { MYTEAM } from "../constants";
import PlayerCard from "./Card/PlayerCard";

export default function Team({ myTeam, totalPlayers, onPlayerRemove }) {
  //REservar posiciones para defensa,
  //Mostrar jugadores

  //Eliminar jugadores

  return (
    <div>
      <h2>My Team {totalPlayers}/16</h2>
      {Object.keys(myTeam).map((position) => {
        const players = myTeam[position];
        if (Array.isArray(players))
          return (
            <div key={position}>
              {players.length > 0 && (
                <h2>
                  {position} {players.length}/4
                </h2>
              )}

              <div className="player-grid">
                {players.map((player) => {
                  return (
                    <PlayerCard
                      key={player.id}
                      player={player}
                      onPlayerSelected={() => onPlayerRemove(player)}
                      myTeamCard
                    />
                  );
                })}
              </div>
            </div>
          );
      })}
    </div>
  );
}
