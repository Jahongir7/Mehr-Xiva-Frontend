import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Statistika',
    path: '/dean/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Tutorlar',
    path: '/dean/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Fakultetlar',
    path: '/dean/faculties',
    icon: <Icon icon="clarity:users-solid" width="64" height="64" />
  },
  {
    title: 'Hisobot',
    path: '/dean/blog',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
