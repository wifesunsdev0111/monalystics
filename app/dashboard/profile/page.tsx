import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";

import { config } from "@/config";
import { ProfileDetailsForm } from "@/components/dashboard/profile/profile-details-form";

export const metadata = {
  title: `Profile | Dashboard | ${config.site.name}`
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <ProfileDetailsForm />
    </Stack>
  );
}
