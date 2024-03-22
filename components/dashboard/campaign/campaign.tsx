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
import Textfield from "@mui/material/TextField";
import { width } from "@mui/system";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { SxProps } from "@mui/material/styles";
import Image from "next/image";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" }
] as const;

export interface Campaign {
  avatar: string;
  name: string;
  description: string;
  count_influencers: number;
  expire: string;
}

export interface CampaignsProps {
  campaigns: Campaign[];
  sx?: SxProps;
}

export function CampaignProcess({
  campaigns,
  sx
}: CampaignsProps): React.JSX.Element {
  return (
    <form
      style={{ border: "none" }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Grid container spacing={4}>
        <Grid lg={4} md={8} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-medium">
              Title
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter your title</InputLabel>
              <OutlinedInput label="Enter your title" name="title" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid lg={4} md={8} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-medium">
              HashTag
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter your hash tag</InputLabel>
              <OutlinedInput label="Enter your hash tag" name="hashtag" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid lg={4} md={8} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-medium">
              Time limit
            </Typography>
            <FormControl className="inter-light">
              <InputLabel>Enter your time limit</InputLabel>
              <OutlinedInput label="Enter your time limit" name="timelimit" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid lg={4} md={8} xs={12}>
          <Typography variant="h6" className="inter-medium">
            Influencers channel target
          </Typography>
          <Stack spacing={5}>
            <Box sx={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Instagram"
                  />
                </Grid>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Twitter"
                  />
                </Grid>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Linkedin"
                  />
                </Grid>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Snapchat"
                  />
                </Grid>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Facebook"
                  />
                </Grid>
                <Grid lg="auto" md={6} xs={12}>
                  <FormControlLabel
                    sx={{ color: "#162447", fontSize: "0.65rem" }}
                    className="inter-light"
                    control={
                      <Checkbox
                        sx={{ color: "#C4CBDE", paddingRight: "0.1vw" }}
                      />
                    }
                    label="Tik Tok"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box width="100%">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#6D8FE7",
                  fontSize: "0.8rem"
                }}
                className="inter-medium"
              >
                Start campaign
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid lg={8} md={12} xs={12}>
          <Stack spacing={1}>
            <Typography variant="h6" className="inter-medium">
              Description
            </Typography>
            <textarea
              className="textarea-style"
              placeholder="Write Description..."
            ></textarea>
          </Stack>
        </Grid>
        <Grid lg={12} md={12} xs={12}>
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
              title="Existing campaigns"
            />

            <CardContent
              sx={{
                paddingTop: "0",
                paddingBottom: "0 important",
                color: "#838383"
              }}
              className="inter-semibold"
            >
              {campaigns.map((campaign, index) => (
                <Stack key={index}>
                  <Divider sx={{ border: "1px solid #EFF0F6" }} />
                  <Grid
                    container
                    spacing={0}
                    //   justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: "8vh" }}
                  >
                    <Grid lg={9} xs={12} sx={{ display: "flex" }}>
                      <Image
                        src={campaign.avatar}
                        alt="avatar"
                        width={55}
                        height={55}
                      ></Image>
                      <Stack sx={{ marginLeft: "0.8vw" }}>
                        <Typography
                          variant="body2"
                          className="inter-semibold"
                          sx={{ color: "#000000" }}
                        >
                          {campaign.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="inter-medium"
                          sx={{ color: "#000000" }}
                        >
                          {campaign.description.length > 33
                            ? `${campaign.description.substring(0, 33)}...`
                            : campaign.description}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="inter-regular"
                          sx={{ color: "#00A4FF" }}
                        >
                          {campaign.count_influencers} Influencers engaged
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid lg={3} md={6} xs={12}>
                      <Typography
                        variant="subtitle2"
                        className="inter-regular"
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                          color: "#53646D"
                        }}
                      >
                        {campaign.expire}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}
