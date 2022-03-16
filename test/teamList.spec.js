import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { App } from "../src/App";
import TeamList from "../src/components/TeamList/TeamList";
import { competitions } from "./mocks/competition";
import { mockPlayers } from "./mocks/players";
import { mockTeams } from "./mocks/teams";
import { getDivisions, getTeams, getPlayers } from "../src/services/football";

jest.mock("../src/services/football", () => ({
  getDivisions: jest.fn().mockReturnValue({ competitions }),
  getTeams: jest.fn().mockReturnValue({ mockTeams }),
  getPlayers: jest.fn().mockReturnValue({ mockPlayers })
}));

describe("TeamList", () => {
  it("shows the teams when clicking a division", () => {
    getDivisions.mockReturnValue({ competitions });

    const { getByText } = render(<TeamList />);

    expect(getByText(/Primera Division/i).textContent).not.toBe(null);

    // fireEvent.click(getByText("State Change Button"));

    // expect(getByText(/Initial/i).textContent).toBe(mockTeams);
  });
});
