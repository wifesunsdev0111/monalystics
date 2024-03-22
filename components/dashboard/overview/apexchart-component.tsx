"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useEffect } from "react";

export interface TotalCustomersProps {
  diff?: number;
  sx?: SxProps;
  value: string;
}

const chartData = {
  type: "area",
  height: 45,
  options: {
    chart: {
      id: "support-chart",
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: "Ticket "
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      data: [0, 15, 10, 50, 30, 40, 25]
    }
  ]
};

export function AppexChartComponent({
  diff,
  sx,
  value
}: TotalCustomersProps): React.JSX.Element {
  const orangeDark = "#0062FF";

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: "light"
      }
    };
    ApexCharts.exec(`support-chart`, "updateOptions", newSupportChart);
  }, [orangeDark]);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            spacing={1}
          >
            <Typography variant="h5" className="inter-semibold">
              {value}
            </Typography>
            <Typography color="#2BC255" variant="h6">
              {"(+" + diff + "%)"}
            </Typography>
          </Stack>
          <Stack spacing={3}>
            <Chart {...chartData} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
