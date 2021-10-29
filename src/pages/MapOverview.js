import {
  Alert,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/system";
import React from "react";

const MAP_OVERVIEW_QUERY = gql`
  query UserStatsQuery {
    GetMaps {
      id
      name
      category
      tags
      tier
      stages
      bonusStages
      ratings
    }
  }
`;
const MapOverview = () => {
  const { data, loading, error } = useQuery(MAP_OVERVIEW_QUERY);
  console.log(data);
  return (
    <Box>
      {!loading && error && (
        <Alert severity="error">
          Could not load maps.
          <br />
          <code>{error.message}</code>
        </Alert>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mapname</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Tier</TableCell>
              <TableCell>Stage Count</TableCell>
              <TableCell>Bonus Stage Count</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading &&
              !error &&
              Array(10).map((_, n) => (
                <TableRow key={n}>
                  <TableCell colSpan={6}>
                    <Skeleton variant="text" />
                  </TableCell>
                </TableRow>
              ))}
            {!loading &&
              !error &&
              data.GetMaps.map((map) => (
                <TableRow key={map.id}>
                  <TableCell>{map.name}</TableCell>
                  <TableCell>{map.category}</TableCell>
                  <TableCell>{map.tier}</TableCell>
                  <TableCell>{map.stages}</TableCell>
                  <TableCell>{map.bonusStages}</TableCell>
                  <TableCell>{map.rating}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MapOverview;
