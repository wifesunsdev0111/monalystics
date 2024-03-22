"use client";

import * as React from "react";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { NavItemConfig } from "@/types/nav";
import { paths } from "@/paths";
import { isNavItemActive } from "@/lib/is-nav-item-active";
import { Logo } from "@/components/core/logo";

import { navItems } from "./config";
import { navIcons } from "./nav-icons";

interface SideNavProps {
  onTitleChange: (newTitle: string) => void;
}

export function SideNav({ onTitleChange }: SideNavProps): React.JSX.Element {
  const pathname = usePathname();
  const handleNavItemClick = (newTitle: string) => {
    onTitleChange(newTitle);
  };

  return (
    <Box
      sx={{
        "--SideNav-background": "var(--mui-palette-neutral-950)",
        "--SideNav-color": "var(--mui-palette-common-white)",
        "--NavItem-color": "rgba(0, 0, 0, 0.7)",
        "--NavItem-hover-background": "rgba(255, 255, 255, 0.04)",
        "--NavItem-active-background": "rgba(27, 89, 248, 0.1)",
        "--NavItem-active-color": "#1B59F8",
        "--NavItem-disabled-color": "var(--mui-palette-neutral-500)",
        "--NavItem-icon-color": "rgba(0, 0, 0, 0.7)",
        "--NavItem-icon-active-color": "#1B59F8",
        "--NavItem-icon-disabled-color": "var(--mui-palette-neutral-600)",
        bgcolor: "var(--SideNav-color)",
        color: "var(--SideNav-color)",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        border: "1px solid #EFF0F6",
        borderRadius: "25px",
        scrollbarWidth: "none",
        top: 0,
        width: "var(--SideNav-width)",
        zIndex: "var(--SideNav-zIndex)",
        "&::-webkit-scrollbar": { display: "none" }
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          component={RouterLink}
          href={paths.home}
          sx={{ display: "inline-flex" }}
        >
          <Logo color="light" height={50} width={130} />
        </Box>
      </Stack>
      {/* <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} /> */}
      <Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
        {renderNavItems({
          pathname,
          items: navItems,
          onTitleChange: handleNavItemClick
        })}
      </Box>
    </Box>
  );
}

function renderNavItems({
  items = [],
  pathname,
  onTitleChange
}: {
  items?: NavItemConfig[];
  pathname: string;
  onTitleChange: (newTitle: string) => void;
}): React.JSX.Element {
  const children = items.reduce(
    (acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
      const { key, ...item } = curr;

      acc.push(
        <NavItem
          key={key}
          pathname={pathname}
          {...item}
          onTitleChange={onTitleChange}
        />
      );

      return acc;
    },
    []
  );

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, "items"> {
  pathname: string;
  onTitleChange?: (newTitle: string) => void;
}

function NavItem({
  disabled,
  external,
  href,
  icon,
  matcher,
  pathname,
  title,
  onTitleChange
}: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({
    disabled,
    external,
    href,
    matcher,
    pathname
  });
  const Icon = icon ? navIcons[icon] : null;

  const handleClick = () => {
    if (onTitleChange && title) {
      onTitleChange(title);
      console.log(title, pathname);
    }
  };

  return (
    <li>
      <Box
        onClick={handleClick}
        {...(href
          ? {
              component: external ? "a" : RouterLink,
              href,
              target: external ? "_blank" : undefined,
              rel: external ? "noreferrer" : undefined
            }
          : { role: "button" })}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          width: 228,
          color: "var(--NavItem-color)",
          cursor: "pointer",
          display: "flex",
          flex: "0 0 auto",
          gap: 1,
          p: "6px 16px",
          position: "relative",
          textDecoration: "none",
          whiteSpace: "nowrap",
          ...(disabled && {
            bgcolor: "var(--NavItem-disabled-background)",
            color: "var(--NavItem-disabled-color)",
            cursor: "not-allowed"
          }),
          ...(active && {
            bgcolor: "var(--NavItem-active-background)",
            color: "var(--NavItem-active-color)"
          })
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: "0 0 auto"
          }}
        >
          {Icon ? (
            <Icon
              fill={
                active
                  ? "var(--NavItem-icon-active-color)"
                  : "var(--NavItem-icon-color)"
              }
              fontSize="var(--icon-fontSize-md)"
              weight={"fill"}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography
            component="span"
            className="inter-semibold"
            sx={{
              color: "inherit",
              fontSize: "1rem",
              fontWeight: 500,
              lineHeight: "5vh"
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
