import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { formatRun } from "../utils/formats";
import { formatTimeFromSeconds } from "../utils/formatTime";

const makeKey = (time) =>
  `${time.mapid}-${time.runid}-${time.recdate}-${time.rectime}`;

const StyledTable = styled(Table)`
  thead tr {
    background-color: #010101;
  }
  tbody tr {
    background-color: #2f2f2f;
  }
`;

const TimesTable = ({ times, loading, error, noResult = "No results :(" }) => {
  if (loading) {
    return <Skeleton variant="rectangular" />;
  }

  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Map</TableCell>
            <TableCell>Run</TableCell>
            <TableCell>Recorded Date</TableCell>
            <TableCell>Rank</TableCell>
            <TableCell>Finish Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {times &&
            times.map((time) => (
              <TableRow key={makeKey(time)}>
                <TableCell>{time.map.mapname}</TableCell>
                <TableCell>{formatRun(time.run.runid)}</TableCell>
                <TableCell>{time.recdate}</TableCell>
                <TableCell>
                  {time.rank}/{time.rankcount}
                </TableCell>
                <TableCell>{formatTimeFromSeconds(time.rectime)}</TableCell>
              </TableRow>
            ))}
          {times != null && times.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} height={30} align="center">
                {noResult}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default TimesTable;
