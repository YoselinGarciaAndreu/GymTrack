import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Personal',
  },

  {
    displayName: 'Progreso fisico',
    iconName: 'circle-letter-p',
    route: '/pierna',
  },
  {
    navCap: 'Ejercicios',
  },
  {
    displayName: 'Piernas',
    iconName: 'circle-letter-p',
    route: '/pierna',
  },
  {
    displayName: 'Brazos',
    iconName: 'circle-letter-b',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Torso',
    iconName: 'circle-letter-t',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Espalda',
    iconName: 'circle-letter-e',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Cardio',
    iconName: 'bike',
    route: '/ui-components/badge',
  },
  {
    navCap: 'Rutinas',
  },
  {
    displayName: 'Mis rutinas',
    iconName: 'bike',
    route: '/rutinas_guardadas',
  },
  {
    displayName: 'Rutinas guardadas',
    iconName: 'circle-letter-p',
    route: '/rutinas_guardadas',
  },

  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
