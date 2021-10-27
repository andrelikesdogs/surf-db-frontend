import SteamID from "steamid";

export default (input) => {
  try {
    const steamId = new SteamID(input);
    return steamId.isValidIndividual();
  } catch (err) {
    return false;
  }
};
