import SteamID from "steamid";

export default (input) => {
  try {
    const steamId = new SteamID(decodeURIComponent(input.trim()));
    return steamId.isValidIndividual();
  } catch (err) {
    return false;
  }
};
