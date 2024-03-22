import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'Home', title: 'Home', href: paths.dashboard.overview, icon: 'trend-up' },
  { key: 'Analysis', title: 'Analysis', href: paths.dashboard.analysis, icon: 'lightning' },
  { key: 'Profile', title: 'Profile', href: paths.dashboard.profile, icon: 'lightning' },
  { key: 'Influencers', title: 'Influencers', href: paths.dashboard.influencers, icon: 'users' },
  { key: 'Campaign', title: 'Campaign', href: paths.dashboard.campaign, icon: 'identification-card' },
] satisfies NavItemConfig[];
