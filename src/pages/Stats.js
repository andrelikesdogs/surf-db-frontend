import { useQuery, gql } from "@apollo/client";
import {
  Alert,
  Chip,
  Container,
  Grid,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { useParams } from "react-router";
import isValidSteamId from "../utils/isValidSteamId";
import SteamID from "../components/SteamID";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { formatTimeFromSeconds } from "../utils/formatTime";
import { formatRunID } from "../utils/formats";
import TimesTable from "../components/TimesTable";

const USER_STATS_QUERY = gql`
  query UserStatsQuery($steamId: ID!) {
    GetUserSteamProfile(steamId: $steamId) {
      avatar {
        small
        medium
        large
      }
      nickname
      steamID
    }
    GetUserStats(steamId: $steamId) {
      completed {
        map {
          mapname
        }
        variant {
          name
          mapid
          descriptionid
          game
        }
        run {
          runid
        }
        mode
        style
        rank
        rectime
        recdate
        jumpnum
      }
      records {
        map {
          mapname
        }
        variant {
          name
          mapid
          descriptionid
          game
        }
        run {
          runid
        }
        mode
        style
        rank
        rectime
        recdate
        jumpnum
      }
      user {
        uid
        steamid
        name
        joindate
        recordCount
        completedCount
      }
    }
  }
`;

const AvatarImage = styled("img")``;

const Stats = ({
  match: {
    params: { steamId },
  },
}) => {
  const { loading, error, data } = useQuery(USER_STATS_QUERY, {
    variables: {
      steamId,
    },
  });

  if (!isValidSteamId(steamId)) {
    return (
      <Container>
        <Alert severity="error">The SteamID provided is not valid.</Alert>
      </Container>
    );
  }

  console.log(data);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item>
              {data?.GetUserSteamProfile ? (
                <AvatarImage src={data.GetUserSteamProfile.avatar.large} />
              ) : (
                <Skeleton />
              )}
            </Grid>
            <Grid item flexGrow={1}>
              <Typography variant="h3">
                {loading ? <Skeleton /> : data?.GetUserSteamProfile?.nickname}
              </Typography>
              <Typography sx={{ top: 0 }} variant="6">
                <SteamID id={steamId} />
              </Typography>
              <Box sx={{ paddingTop: 1 }}>
                {loading ? (
                  <Skeleton />
                ) : (
                  data?.GetUserStats?.user?.recordCount > 0 && (
                    <Chip
                      color="secondary"
                      sx={{ marginRight: 2 }}
                      icon={<EmojiEventsIcon />}
                      label={`${data?.GetUserStats?.user?.recordCount} Server Records`}
                    />
                  )
                )}
                {loading ? (
                  <Skeleton />
                ) : (
                  data?.GetUserStats?.user?.completedCount > 0 && (
                    <Chip
                      color="secondary"
                      icon={<BeenhereIcon />}
                      label={`${data?.GetUserStats?.user?.completedCount} Maps completed`}
                    />
                  )
                )}
              </Box>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Paper sx={{ px: 4, py: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Your Completions
          </Typography>
          {loading && <Skeleton variant="rectangular" height={200}></Skeleton>}
          {!loading && data?.GetUserStats == null && (
            <Alert severity="error">
              Unfortunately, we couldn't fetch your completions. {error.message}
            </Alert>
          )}
          <TimesTable
            times={data?.GetUserStats?.completed}
            loading={loading}
            error={error}
            noResult={
              <Typography variant="body3">
                You haven't completed a map yet
              </Typography>
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} xl={6}>
        <Paper sx={{ px: 4, py: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Your Records
          </Typography>
          {loading && <Skeleton variant="rectangular" height={200}></Skeleton>}
          {!loading && data?.GetUserStats == null && (
            <Alert severity="error">
              Unfortunately, we couldn't fetch your records.
            </Alert>
          )}
          <TimesTable
            times={data?.GetUserStats?.records}
            loading={loading}
            error={error}
            noResult={
              <Typography variant="body3">
                You hold no server records at the moment
              </Typography>
            }
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Stats;
