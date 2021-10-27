import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export const formatTimeFromSeconds = (timeInSeconds) => {
  const time = moment
    .duration(timeInSeconds, "seconds")
    .format("hh:mm:ss.SSS", { trim: true });

  return time;
};
