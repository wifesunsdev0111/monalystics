"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export interface TasksProgressProps {
  sx?: SxProps;
  instagram: number;
  twitter: number;
  tiktok: number;
}
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fce0e0"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage: "linear-gradient(to right, #FFBF1A, #FF4080)"
  }
}));

export function ChanellProgress({
  instagram,
  twitter,
  tiktok,
  sx
}: TasksProgressProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Typography
          variant="h6"
          className="roboto-bold"
          sx={{ color: "rgb(0, 0, 0, 0.5)" }}
        >
          Chanells
        </Typography>
        <Stack sx={{ marginTop: "3vh" }}>
          <Grid container spacing={0}>
            <Grid lg={1} sm={2} xs={4}>
              <Image
                src="/assets/instagram.png"
                alt="instagram"
                width={50}
                height={50}
              ></Image>
            </Grid>
            <Grid lg={8} xs={12} sx={{ marginLeft: "1.5vw" }}>
              <Stack spacing={1}>
                <Typography variant="h6" className="roboto-bold">
                  Instagram
                </Typography>
                <BorderLinearProgress variant="determinate" value={instagram} />
              </Stack>
            </Grid>
            <Grid
              direction="row"
              lg={2}
              sm={4}
              xs={8}
              sx={{ marginLeft: "0.5vw", paddingTop: "2.2vh" }}
            >
              <Box width="100%">
                <Grid container>
                  <Grid lg={7} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.7)" }}
                    >
                      {instagram}%
                    </Typography>
                  </Grid>
                  <Grid lg={5} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.3)" }}
                    >
                      Hits
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ marginTop: "3vh" }}>
          <Grid container spacing={0}>
            <Grid lg={1} sm={2} xs={4}>
              <Image
                src="/assets/twitter.png"
                alt="twitter"
                width={50}
                height={50}
              ></Image>
            </Grid>
            <Grid lg={8} xs={12} sx={{ marginLeft: "1.5vw" }}>
              <Stack spacing={1}>
                <Typography variant="h6" className="roboto-bold">
                  Twitter
                </Typography>
                <BorderLinearProgress variant="determinate" value={twitter} />
              </Stack>
            </Grid>
            <Grid
              direction="row"
              lg={2}
              sm={4}
              xs={8}
              sx={{ marginLeft: "0.5vw", paddingTop: "2.2vh" }}
            >
              <Box width="100%">
                <Grid container>
                  <Grid lg={7} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.7)" }}
                    >
                      {twitter}%
                    </Typography>
                  </Grid>
                  <Grid lg={5} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.3)" }}
                    >
                      Hits
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ marginTop: "3vh", marginBottom: "3vh" }}>
          <Grid container spacing={0}>
            <Grid lg={1} sm={2} xs={4}>
              <Image
                src="/assets/tiktok.png"
                alt="tiktok"
                width={50}
                height={50}
              ></Image>
            </Grid>
            <Grid lg={8} xs={12} sx={{ marginLeft: "1.5vw" }}>
              <Stack spacing={1}>
                <Typography variant="h6" className="roboto-bold">
                  TikTok
                </Typography>
                <BorderLinearProgress variant="determinate" value={tiktok} />
              </Stack>
            </Grid>
            <Grid
              direction="row"
              lg={2}
              sm={4}
              xs={8}
              sx={{ marginLeft: "0.5vw", paddingTop: "2.2vh" }}
            >
              <Box width="100%">
                <Grid container>
                  <Grid lg={7} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.7)" }}
                    >
                      {tiktok}%
                    </Typography>
                  </Grid>
                  <Grid lg={5} sm={10} xs={12}>
                    <Typography
                      variant="h6"
                      className="roboto-bold"
                      sx={{ color: "rgb(0, 0, 0, 0.3)" }}
                    >
                      Hits
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
