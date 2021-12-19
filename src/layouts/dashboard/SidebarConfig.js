import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Topshiriqlar',
    path: '/dashboard/tasks',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Tashkilotlar',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Shartnomalar',
    path: '/dashboard/contracts',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Kundalik',
    path: '/dashboard/daily',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
