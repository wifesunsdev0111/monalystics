"use client";

import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { List as ListIcon } from "@phosphor-icons/react/dist/ssr/List";

import { usePopover } from "@/hooks/use-popover";
import Divider from "@mui/material/Divider";

import { MobileNav } from "./mobile-nav";
import { UserPopover } from "./user-popover";
import { Typography } from "@mui/material";

interface MainNavProps {
  title: string | null;
}

export function MainNav({ title }: MainNavProps): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid var(--mui-palette-divider)",
          backgroundColor: "var(--mui-palette-background-paper)",
          position: "sticky",
          border: "none",
          margin: 3,
          zIndex: "var(--mui-zIndex-appBar)"
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
            px: 2
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: "none" } }}
            >
              <ListIcon />
            </IconButton>
            <Typography variant="h5" className="inter-bold">
              {title}
            </Typography>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={1}>
            <Tooltip title="Email">
              <IconButton>
                <Image
                  src="/assets/email.svg"
                  alt="email"
                  height={24}
                  width={24}
                ></Image>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge
                badgeContent={1}
                color="error"
                variant="dot"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <IconButton>
                  <Image
                    src="/assets/bell.svg"
                    alt="email"
                    height={24}
                    width={24}
                  ></Image>
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/avatar.svg"
              sx={{ cursor: "pointer" }}
            />
            <Stack spacing={0}>
              <Typography variant="subtitle1" className="inter-semibold">
                Andrew
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ marginTop: "-0.7vh" }}
                className="inter-regular"
              >
                Admin account
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ border: "1px solid #EFF0F6", margin: 2 }} />
      </Box>

      <UserPopover
        anchorEl={userPopover.anchorRef.current}
        onClose={userPopover.handleClose}
        open={userPopover.open}
      />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
