const baseURL = "https://api.football-data.org/v2/";
const { API_TOKEN } = process.env;

async function get(url) {
  const res = await fetch(`${baseURL}${url}`, {
    headers: { "X-Auth-Token": API_TOKEN }
  });
  return await res.json();
}

export async function getDivisions() {
  return await get("competitions");
}

export async function getTeams(divisionId) {
  return await get(`competitions/${divisionId}/teams`);
}

export async function getPlayers(teamId) {
  return await get(`teams/${teamId}`);
}
