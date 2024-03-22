import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { TrendUp } from '@phosphor-icons/react/dist/ssr/Trendup';
import  {Lightning} from '@phosphor-icons/react/dist/ssr/Lightning';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { IdentificationCard } from '@phosphor-icons/react/dist/ssr/IdentificationCard';
export const navIcons = {
  'trend-up': TrendUp,
  'lightning': Lightning,
  'plugs-connected': PlugsConnectedIcon,
  'identification-card': IdentificationCard,
  users: UsersIcon,
} as Record<string, Icon>;
