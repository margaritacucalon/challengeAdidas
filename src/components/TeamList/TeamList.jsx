import React, { useState, useEffect, useCallback } from "react";
import { TIER_ONE } from "../../constants";
import { getDivisions, getPlayers, getTeams } from "../../services/football";
import "./TeamList.scss";
import Squad from "../Squad/Squad";

export default function TeamList({ myTeam, onTeamChange }) {
  const [divisions, setDivisions] = useState([]);
  const [nationalTeams, setNationalTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const fetchdivisionsHandler = useCallback(async () => {
    const { competitions } = await getDivisions();
    setDivisions(competitions.filter(({ plan }) => plan === TIER_ONE));
    console.log({ competitions });
  }, []);

  useEffect(() => {
    fetchdivisionsHandler();
  }, [fetchdivisionsHandler]);

  async function fetchTeamsHandler(divisionId) {
    try {
      const { teams } = await getTeams(divisionId);
      setNationalTeams(teams);
      setPlayers([]);
    } catch (err) {
      console.log(err, "wait a couple seconds before clicing another item");
    }
  }

  async function fetchPlayersHandler(teamId) {
    try {
      const { squad } = await getPlayers(teamId);
      setPlayers(squad);
    } catch (err) {
      console.log("error: ", err.name);
    }
  }

  return (
    <div className="list">
      <ul>
        {divisions.map(({ id, name }) => {
          return (
            <li key={id}>
              <button
                className="divisions"
                onClick={() => fetchTeamsHandler(id)}
                data-testid="divisionButton"
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>

      <ul>
        {nationalTeams.map(({ id, name, crestUrl }) => {
          return (
            <li key={id}>
              <button className="teams" onClick={() => fetchPlayersHandler(id)}>
                <img src={crestUrl} alt="TeamLogo" />
                {name}
              </button>
            </li>
          );
        })}
      </ul>

      {players.length > 0 && (
        <Squad
          players={players}
          myTeam={myTeam}
          onPlayerSelected={onTeamChange}
        />
      )}
    </div>
  );
}
