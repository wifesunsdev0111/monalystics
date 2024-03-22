"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
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

export interface HasTagsProps {
  tag_name: string;
  tag_value: number;
}

export interface TasksProgressProps {
  sx?: SxProps;
  values: HasTagsProps[];
}
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d9fbeb"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage: "linear-gradient(to right, #2FEA9B, #7FDD53)"
  }
}));

export function HashTagsProgress({
  values,
  sx
}: TasksProgressProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Typography
          variant="h6"
          className="inter-bold"
          sx={{ color: "rgb(0, 0, 0, 0.5)" }}
        >
          Strongest Hash tags
        </Typography>
        {values.map((value, index) => (
          <Stack sx={{ marginTop: "3vh" }} key={index}>
            <Grid container spacing={0}>
              <Grid lg={1} sm={2} xs={4}>
                <Image
                  src="/assets/hashtag.png"
                  alt="instagram"
                  width={45}
                  height={45}
                ></Image>
              </Grid>
              <Grid lg={8} xs={12} sx={{ marginLeft: "1.5vw" }}>
                <Stack spacing={1}>
                  <Typography variant="h6" className="inter-bold">
                    {value.tag_name}
                  </Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={value.tag_value}
                  />
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
                        className="inter-bold"
                        sx={{ color: "rgb(0, 0, 0, 0.7)" }}
                      >
                        {value.tag_value}%
                      </Typography>
                    </Grid>
                    <Grid lg={5} sm={10} xs={12}>
                      <Typography
                        variant="h6"
                        className="inter-bold"
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
        ))}
      </CardContent>
    </Card>
  );
}
