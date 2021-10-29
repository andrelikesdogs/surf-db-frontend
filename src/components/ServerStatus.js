import { Box } from "@mui/system";
import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  Alert,
  Badge,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { formatTimeFromSeconds } from "../utils/formatTime";

const SERVER_STATUS_QUERY = gql`
  query ServerState($serverId: ID!) {
    GetServerStatus(serverId: $serverId) {
      status
      name
      map
      playerCount
      maxPlayerCount
      players {
        name
        playTimeSeconds
      }
    }
  }
`;

const ServerStatus = ({ serverId }) => {
  const { data, loading, error } = useQuery(SERVER_STATUS_QUERY, {
    variables: {
      serverId,
    },
    pollInterval: 2000,
  });
  const theme = useTheme();

  let badgeColor = "warning";
  if (!loading) {
    badgeColor =
      data?.GetServerStatus.status === "ONLINE" ? "success" : "error";
  }

  return (
    <Box sx={{ p: 1 }}>
      {loading && <Skeleton variant="rectanglular" height={300} />}
      {!loading && error && (
        <Alert severity="error">
          Couldn't fetch Serverdata. <br />
          <code>{error.message}</code>
        </Alert>
      )}
      {!loading &&
        data?.GetServerStatus &&
        (data.GetServerStatus.status === "ONLINE" ? (
          <React.Fragment>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>{data.GetServerStatus.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Players</strong>
                  </TableCell>
                  <TableCell>
                    {data.GetServerStatus.playerCount}/
                    {data.GetServerStatus.maxPlayerCount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Map</strong>
                  </TableCell>
                  <TableCell>{data.GetServerStatus.map}</TableCell>
                </TableRow>
                {data.GetServerStatus.players.length > 0 && (
                  <TableRow>
                    <TableCell colSpan={2}>
                      <strong>List of Players</strong>
                    </TableCell>
                  </TableRow>
                )}
                {data.GetServerStatus.players.map((player) => (
                  <TableRow key={player.name}>
                    <TableCell align="right">{player.name}</TableCell>
                    <TableCell>
                      {formatTimeFromSeconds(player.playTimeSeconds)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="body1">Server {serverId} Offline</Typography>
          </React.Fragment>
        ))}
    </Box>
  );
};

export default ServerStatus;
