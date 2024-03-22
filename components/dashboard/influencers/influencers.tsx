"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import type { SxProps } from "@mui/material/styles";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export interface Influencer {
  id: string;
  avatar: string;
  social: string;
  name: string;
  content: string;
}

export interface InfluencersProps {
  influencers_data: Influencer[];
  sx?: SxProps;
}

export function Influencers({
  influencers_data,
  sx
}: InfluencersProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader
        sx={{
          paddingTop: "1.5vh",
          paddingBottom: "0.5vh",
          color: "rgb(0, 0, 0, 0.5)"
        }}
        action={
          <Button
            color="inherit"
            size="small"
            sx={{
              color: "#1B59F8",
              fontFamily: "Inter, sans-serif !important",
              fontWeight: "600 !important",
              fontStyle: "normal",
              fontSize: "0.85rem"
            }}
          >
            See more
          </Button>
        }
        title="Top Registered influencers"
      />

      <CardContent
        sx={{ paddingTop: "0", paddingBottom: "0 important", color: "#838383" }}
        className="inter-semibold"
      >
        {influencers_data.map((influencer, index) => (
          <Stack key={index}>
            <Divider sx={{ border: "1px solid #EFF0F6" }} />
            <Grid
              container
              spacing={0}
              //   justifyContent="center"
              alignItems="center"
              style={{ minHeight: "8vh" }}
            >
              <Grid lg={3} sm={6} xs={12} sx={{ display: "flex" }}>
                <Image
                  src={influencer.avatar}
                  alt="avatar"
                  width={45}
                  height={45}
                ></Image>
                <Stack sx={{ marginLeft: "0.8vw" }}>
                  <Typography
                    variant="body1"
                    className="inter-semibold"
                    sx={{ color: "#000000" }}
                  >
                    {influencer.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="inter-regular"
                    sx={{ color: "#00A4FF" }}
                  >
                    {influencer.social}
                  </Typography>
                </Stack>
              </Grid>

              <Grid lg={8} xs={12}>
                <Typography
                  variant="h6"
                  className="inter-regular"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#53646D"
                  }}
                >
                  {influencer.content}
                </Typography>
              </Grid>
              <Grid lg={1} sm={2} xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#6D8FE7",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyItems: "flex-end"
                  }}
                  className="inter-medium"
                >
                  Hire
                </Button>
              </Grid>
            </Grid>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
