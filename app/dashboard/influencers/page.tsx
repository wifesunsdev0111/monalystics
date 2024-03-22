import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";

import { config } from "@/config";
import { Influencers } from "@/components/dashboard/influencers/influencers";
import type { Influencer } from "@/components/dashboard/influencers/influencers";

export const metadata = {
  title: `Influencers | Dashboard | ${config.site.name}`
} satisfies Metadata;

const influencers_data = [
  {
    id: "USR-010",
    name: "Didier Drogba",
    social: "Twitter, Instagram, TikTok",
    avatar: "/assets/Thomas.png",
    content: "Beauty, Health care, Sport."
  },
  {
    id: "USR-009",
    name: "Kylian Mbappe",
    avatar: "/assets/Thomas-1.png",
    social: "Twitter, Instagram, TikTok",
    content: "Movies, Health care, Sport."
  },
  {
    id: "USR-009",
    name: "Leo Messi",
    avatar: "/assets/Thomas-2.png",
    social: "Twitter, Instagram, TikTok",
    content: "Clothes, Tech, Sport."
  }
] satisfies Influencer[];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Influencers
        sx={{ width: "100%", height: "100%" }}
        influencers_data={influencers_data}
      />
    </Stack>
  );
}
