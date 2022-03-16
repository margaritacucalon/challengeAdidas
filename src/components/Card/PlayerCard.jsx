import { TiTick } from "react-icons/ti";
import React, { useState } from "react";
import "./playerCard.scss";
import { IMAGEPLAYER } from "../../constants";

export default function PlayerCard({
  player,
  onPlayerSelected,
  isSelected,
  myTeamCard
}) {
  const { id, name, position, nationality } = player;
  const selectedClass = isSelected ? "addSelected" : "add";

  return (
    <div className="player" onClick={() => onPlayerSelected(player)}>
      <img src={IMAGEPLAYER} alt="TeamLogo" />
      <div>{name}</div>

      {!myTeamCard && (
        <>
          <div>{nationality}</div>
          {player.selected}
          <button className={selectedClass}>
            <TiTick />
          </button>
        </>
      )}
    </div>
  );
}
