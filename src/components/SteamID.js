import React, { useEffect, useState } from "react";
import steamId from "steamid";

export const FORMATS = {
  STEAMID_2: "steam2",
  STEAMID_3: "steam3",
  STEAMID_64: "steam64",
};

const SteamID = ({ id, format = FORMATS.STEAMID_2 }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    let steamIdInstance;
    try {
      steamIdInstance = new steamId(id);
      console.log(id);
      setValue(steamIdInstance[format]());
    } catch (err) {
      console.warn("invalid steamid passed to <SteamID>");
    }
  }, []);

  return <React.Fragment>{value}</React.Fragment>;
};

export default SteamID;
