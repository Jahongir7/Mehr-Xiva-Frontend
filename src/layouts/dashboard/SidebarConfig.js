import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Statistika',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: "O'quvchilar",
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Guruhlarim',
    path: '/dashboard/groups',
    icon: <Icon icon="clarity:users-solid" width="64" height="64" />
  },
  {
    title: 'Hisobot',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },

  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
