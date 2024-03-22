import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";

import { config } from "@/config";
import { CampaignProcess } from "@/components/dashboard/campaign/campaign";
import type { Campaign } from "@/components/dashboard/campaign/campaign";

export const metadata = {
  title: `Campaign | Dashboard | ${config.site.name}`
} satisfies Metadata;

const campaigns = [
  {
    name: "Summer campaign",
    avatar: "/assets/Thomas.png",
    expire: "Expire in 3 weeks",
    count_influencers: 3,
    description:
      "brief description of the campaign of Summer brief description of the campaign of Christmas brief description of the campaign of Christmas "
  },
  {
    name: "Christmas campaign",
    avatar: "/assets/Thomas-1.png",
    expire: "Expire in 2 days",
    count_influencers: 1,
    description: "brief description of the campaign of Christmas"
  },
  {
    name: "New Year campaign",
    avatar: "/assets/Thomas-2.png",
    expire: "Expired",
    count_influencers: 4,
    description: "brief description of the campaign of New Year"
  }
] satisfies Campaign[];
export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <CampaignProcess campaigns={campaigns}></CampaignProcess>
    </Stack>
  );
}
