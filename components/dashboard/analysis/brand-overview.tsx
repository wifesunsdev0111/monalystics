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
import Box from "@mui/system/Box";
import { display } from "@mui/system";

export interface Brand {
  avatar: string;
  brand_name: string;
  posts: number;
  posts_calcu: number;
  funs: number;
  funs_calcu: number;
  funs_growth: number;
  funs_growth_calcu: number;
  total_engagement: number;
  total_engagement_calcu: number;
}

export interface BrandOverviewProps {
  brand_overviews: Brand[];
  sx?: SxProps;
}

export function BrandOverview({
  brand_overviews,
  sx
}: BrandOverviewProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader
        sx={{
          paddingTop: "1.5vh",
          paddingBottom: "0.5vh",
          color: "rgb(0, 0, 0, 0.5)"
        }}
        title="Brand overview"
      />

      <CardContent
        sx={{
          paddingTop: "1.5vh",
          paddingBottom: "0 important",
          color: "#838383"
        }}
        className="inter-semibold"
      >
        {brand_overviews.map((brand, index) => (
          <Stack key={index}>
            <Divider sx={{ border: "1px solid #EFF0F6" }} />
            {index == 0 && (
              <Grid container sx={{ paddingTop: "0.8vh" }}>
                <Grid lg={4} md={8} xs={12}>
                  <Typography
                    variant="subtitle2"
                    className="inter-medium"
                    sx={{ color: "#53646D" }}
                  >
                    BRAND
                  </Typography>
                </Grid>
                <Grid lg={2} md={4} xs={12}>
                  <Typography
                    variant="subtitle2"
                    className="inter-medium"
                    sx={{ color: "#53646D" }}
                  >
                    POSTS
                  </Typography>
                </Grid>
                <Grid lg={2} md={4} xs={12}>
                  <Typography
                    variant="subtitle2"
                    className="inter-medium"
                    sx={{ color: "#53646D" }}
                  >
                    FANS
                  </Typography>
                </Grid>
                <Grid lg={2} md={4} xs={12}>
                  <Typography
                    variant="subtitle2"
                    className="inter-medium"
                    sx={{ color: "#53646D" }}
                  >
                    FANS GROWTH
                  </Typography>
                </Grid>
                <Grid lg={2} md={4} xs={12}>
                  <Typography
                    variant="subtitle2"
                    className="inter-medium"
                    sx={{ color: "#53646D" }}
                  >
                    TOTAL ENGAGEMENT
                  </Typography>
                </Grid>
              </Grid>
            )}
            <Grid
              container
              spacing={0}
              //   justifyContent="center"
              alignItems="center"
              style={{ minHeight: "8vh" }}
            >
              <Grid lg={4} sm={12} xs={12} sx={{ display: "flex" }}>
                <Image
                  src={brand.avatar}
                  alt="avatar"
                  width={45}
                  height={45}
                ></Image>
                <Stack
                  sx={{
                    marginLeft: "0.8vw",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    variant="body1"
                    className="inter-regular"
                    sx={{
                      color: "#000000",
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center"
                    }}
                  >
                    {brand.brand_name}
                  </Typography>
                </Stack>
              </Grid>

              <Grid lg={2} md={12} xs={12}>
                <Stack spacing={0}>
                  <Typography
                    variant="subtitle1"
                    className="inter-semibold"
                    sx={{
                      color: "#53646D"
                    }}
                  >
                    {brand.posts}
                  </Typography>
                  <Box sx={{ display: "flex", padding: "0", margin: "0" }}>
                    {brand.posts_calcu < 0 && (
                      <Image
                        src="/assets/sort-down.png"
                        alt="sortDown"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    {brand.posts_calcu >= 0 && (
                      <Image
                        src="/assets/sort-up.png"
                        alt="sortUp"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    <Typography
                      className="inter-light"
                      sx={{
                        color: "#53646D",
                        fontSize: "0.6rem"
                      }}
                    >
                      {brand.posts_calcu}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid lg={2} md={12} xs={12}>
                <Stack spacing={0}>
                  <Typography
                    variant="subtitle1"
                    className="inter-regular"
                    sx={{
                      color: "#53646D"
                    }}
                  >
                    {brand.funs}K
                  </Typography>
                  <Box sx={{ display: "flex", padding: "0", margin: "0" }}>
                    {brand.funs_calcu < 0 && (
                      <Image
                        src="/assets/sort-down.png"
                        alt="sortDown"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    {brand.funs_calcu >= 0 && (
                      <Image
                        src="/assets/sort-up.png"
                        alt="sortUp"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    <Typography
                      className="inter-light"
                      sx={{
                        color: "#53646D",
                        fontSize: "0.6rem"
                      }}
                    >
                      {brand.funs_calcu}%
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid lg={2} md={12} xs={12}>
                <Stack spacing={0}>
                  <Typography
                    variant="subtitle1"
                    className="inter-regular"
                    sx={{
                      color: "#53646D"
                    }}
                  >
                    {brand.funs_growth}
                  </Typography>
                  <Box sx={{ display: "flex", padding: "0", margin: "0" }}>
                    {brand.funs_growth_calcu < 0 && (
                      <Image
                        src="/assets/sort-down.png"
                        alt="sortDown"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    {brand.funs_growth_calcu >= 0 && (
                      <Image
                        src="/assets/sort-up.png"
                        alt="sortUp"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    <Typography
                      className="inter-light"
                      sx={{
                        color: "#53646D",
                        fontSize: "0.6rem"
                      }}
                    >
                      {brand.funs_growth_calcu}%
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid lg={2} md={12} xs={12}>
                <Stack spacing={0}>
                  <Typography
                    variant="subtitle1"
                    className="inter-regular"
                    sx={{
                      color: "#53646D"
                    }}
                  >
                    {brand.total_engagement}
                  </Typography>
                  <Box sx={{ display: "flex", padding: "0", margin: "0" }}>
                    {brand.total_engagement_calcu < 0 && (
                      <Image
                        src="/assets/sort-down.png"
                        alt="sortDown"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    {brand.total_engagement_calcu >= 0 && (
                      <Image
                        src="/assets/sort-up.png"
                        alt="sortUp"
                        width={12}
                        height={12}
                      ></Image>
                    )}
                    <Typography
                      className="inter-light"
                      sx={{
                        color: "#53646D",
                        fontSize: "0.6rem"
                      }}
                    >
                      {brand.total_engagement_calcu}%
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
