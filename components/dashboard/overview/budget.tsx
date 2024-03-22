import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ArrowDown as ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { ArrowUp as ArrowUpIcon } from "@phosphor-icons/react/dist/ssr/ArrowUp";
import { CurrencyDollar as CurrencyDollarIcon } from "@phosphor-icons/react/dist/ssr/CurrencyDollar";

export interface BudgetProps {
  sx?: SxProps;
  value: string;
  title: string;
}

export function Budget({ sx, value, title }: BudgetProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent sx={{ paddingTop: "1vh" }}>
        <Stack sx={{ paddingBottom: "4vh" }}>
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
            spacing={3}
          >
            <Stack spacing={2}>
              <Typography
                color="text.secondary"
                variant="overline"
                className="inter-medium"
              >
                {title}
              </Typography>
              <Typography variant="h5" className="inter-bold">
                {value}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
