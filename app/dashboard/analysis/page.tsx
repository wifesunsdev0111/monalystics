import * as React from "react";
import type { Metadata } from "next";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import { Box } from "@mui/material";

import { config } from "@/config";
import { Budget } from "@/components/dashboard/overview/budget";
import { Activity } from "@/components/dashboard/overview/activity";
import { ChanellProgress } from "@/components/dashboard/overview/chanell-progress";
import { AppexChartComponent } from "@/components/dashboard/overview/apexchart-component";
import { HashTagsProgress } from "@/components/dashboard/overview/hash-tags-progress";
import SingleInputDateRangePicker from "@/components/dashboard/analysis/timeframe";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chanells from "@/components/dashboard/analysis/chanells";
import CountrySelect from "@/components/dashboard/analysis/countries";
import {
  BrandOverview,
  type Brand
} from "@/components/dashboard/analysis/brand-overview";

export const metadata = {
  title: `Analysis | Dashboard | ${config.site.name}`
} satisfies Metadata;
const budgets = [
  { title: "MENTIONS", value: "27K" },
  { title: "POSITIVE", value: "200M" },
  { title: "NEGATIVE", value: "100K" }
];

const apexs = [
  { diff: 10, value: "+10.5K" },
  { diff: 10, value: "+6.5K" },
  { diff: 10, value: "+9.5K" }
];

const hashTags = [
  { tag_value: 95, tag_name: "Tag name 1" },
  { tag_value: 92, tag_name: "Tag name 2" },
  { tag_value: 89, tag_name: "Tag name 3" }
];

const brands = [
  {
    brand_name: "Burger Station",
    avatar: "/assets/Thomas.png",
    posts: 285,
    posts_calcu: -38,
    funs: 315.4,
    funs_calcu: 10.34,
    funs_growth: 0.58,
    funs_growth_calcu: -17.87,
    total_engagement: 19.13,
    total_engagement_calcu: -2.59
  },
  {
    brand_name: "Pizzeria",
    avatar: "/assets/Thomas-1.png",
    posts: 285,
    posts_calcu: -38,
    funs: 315.4,
    funs_calcu: 10.34,
    funs_growth: 0.58,
    funs_growth_calcu: -17.87,
    total_engagement: 19.13,
    total_engagement_calcu: -2.59
  },
  {
    brand_name: "Bank of citizens",
    avatar: "/assets/Thomas-2.png",
    posts: 285,
    posts_calcu: -38,
    funs: 315.4,
    funs_calcu: 10.34,
    funs_growth: 0.58,
    funs_growth_calcu: -17.87,
    total_engagement: 19.13,
    total_engagement_calcu: -2.59
  }
] satisfies Brand[];

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={4} md={6} xs={12} sx={{ paddingTop: "0" }}>
        <FormControl className="inter-semibold" sx={{ width: "100%" }}>
          <InputLabel>Timeframe: All</InputLabel>
          <OutlinedInput
            label="Timeframe: All"
            name="timeframe"
            sx={{ borderRadius: "30px" }}
          />
        </FormControl>
      </Grid>
      <Grid lg={3} md={6} xs={12} sx={{ paddingTop: "0" }}>
        <FormControl className="inter-semibold" sx={{ width: "100%" }}>
          <InputLabel>#Tags: All</InputLabel>
          <OutlinedInput
            label="# Tags: All"
            name="tagname"
            sx={{ borderRadius: "30px" }}
          />
        </FormControl>
      </Grid>
      <Grid lg={3} md={6} xs={12} sx={{ paddingTop: "0" }}>
        <Chanells></Chanells>
      </Grid>
      <Grid lg={2} md={6} xs={12} sx={{ paddingTop: "0" }}>
        <CountrySelect></CountrySelect>
      </Grid>
      <Grid lg={6} xs={12}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {budgets.map((budget, index) => (
              <Grid key={index} lg={4} xs={12} sx={{ width: "100%" }}>
                <Budget
                  sx={{ height: "100%" }}
                  value={budget.value}
                  title={budget.title}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ width: "100%", marginTop: "2vh" }}>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {apexs.map((apex, index) => (
              <Grid key={index} lg={4} xs={12} sx={{ width: "100%" }}>
                <AppexChartComponent
                  sx={{ height: "100%" }}
                  value={apex.value}
                  diff={apex.diff}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid lg={6} xs={12}>
        <Activity
          chartSeries={[
            {
              name: "This year",
              data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
            }
          ]}
          sx={{ height: "100%" }}
        />
      </Grid>
      <Grid lg={6} xs={12}>
        <ChanellProgress
          sx={{ height: "100%" }}
          instagram={74}
          twitter={52}
          tiktok={36}
        />
      </Grid>
      <Grid lg={6} xs={12}>
        <HashTagsProgress sx={{ height: "100%" }} values={hashTags} />
      </Grid>
      <Grid lg={12} md={12} xs={12}>
        <BrandOverview brand_overviews={brands}></BrandOverview>
      </Grid>
    </Grid>
  );
}
