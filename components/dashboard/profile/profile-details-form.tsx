"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" }
] as const;

export function ProfileDetailsForm(): React.JSX.Element {
  return (
    <form
      style={{ border: "none" }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Grid container spacing={8}>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              Country
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter your country</InputLabel>
              <OutlinedInput label="Enter your country" name="country" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              City
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter your city</InputLabel>
              <OutlinedInput label="Enter your city" name="city" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              SM 1
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter social media profile 1</InputLabel>
              <OutlinedInput label="Enter social media profile 1" name="sm1" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              SM 2
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter social media profile 2</InputLabel>
              <OutlinedInput label="Enter social media profile 2" name="sm2" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              SM 3
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter social media profile 3</InputLabel>
              <OutlinedInput label="Enter social media profile 3" name="sm3" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              Competitor 1
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter competitor social media 1</InputLabel>
              <OutlinedInput
                label="Enter competitor social media 1"
                name="competitor1"
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              Competitor 2
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter competitor social media 2</InputLabel>
              <OutlinedInput
                label="Enter competitor social media 2"
                name="competitor2"
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-semibold">
              Competitor 3
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter competitor social media 3</InputLabel>
              <OutlinedInput
                label="Enter competitor social media 3"
                name="competitor3"
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid md={6} xs={12}>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "black",
              height: "100%",
              fontSize: "1rem",
              marginTop: "1vh",
              width: "100%"
            }}
            className="bold-medium"
          >
            Update profile
          </Button>
        </Grid>
        <Grid md={6} xs={12}></Grid>
      </Grid>
    </form>
  );
}
