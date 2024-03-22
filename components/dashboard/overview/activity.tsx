"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { alpha, useTheme } from "@mui/material/styles";
import type { SxProps } from "@mui/material/styles";
import { ArrowClockwise as ArrowClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowClockwise";
import { CaretDown as CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";
import type { ApexOptions } from "apexcharts";

import { Chart } from "@/components/core/chart";

export interface ActivityProps {
  chartSeries: { name: string; data: number[] }[];
  sx?: SxProps;
}

export function Activity({
  chartSeries,
  sx
}: ActivityProps): React.JSX.Element {
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardHeader
        sx={{ paddingTop: "1.5vh", paddingBottom: "0.5vh" }}
        className="inter-medium"
        action={
          <Button
            color="inherit"
            size="small"
            endIcon={<CaretDownIcon fontSize="var(--icon-fontSize-md)" />}
          >
            Month
          </Button>
        }
        title="Activity"
      />
      <Divider
        sx={{ border: "1px solid #EFF0F6", marginLeft: 2, marginRight: 2 }}
      />
      <CardContent
        sx={{ paddingTop: "0", paddingBottom: "0 important", color: "#838383" }}
        className="inter-medium"
      >
        <Chart
          height={240}
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="100%"
        />
      </CardContent>
    </Card>
  );
}

function useChartOptions(): ApexOptions {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: { show: false }
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.25)
    ],
    dataLabels: { enabled: false },
    fill: { opacity: 1, type: "solid" },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: false } }
    },
    legend: { show: false },
    plotOptions: { bar: { columnWidth: "15px", borderRadius: 6 } },
    stroke: { colors: ["transparent"], show: true, width: 2 },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { color: theme.palette.divider, show: false },
      axisTicks: { color: theme.palette.divider, show: false },
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      labels: { offsetY: 5, style: { colors: theme.palette.text.secondary } }
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}` : `${value}`),
        offsetX: -10,
        style: { colors: theme.palette.text.secondary }
      }
    }
  };
}
