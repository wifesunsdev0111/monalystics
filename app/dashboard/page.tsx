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

export const metadata = {
  title: `Home | Dashboard | ${config.site.name}`
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

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
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
    </Grid>
  );
}
