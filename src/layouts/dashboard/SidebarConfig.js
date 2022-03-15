import { Icon } from '@iconify/react';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
export const directorSidebar = [
  {
    title: 'Tashkilotlar',
    path: '/director/companies',
    icon: <Icon icon="emojione-v1:office-building" width={22} height={22} />
  },
  {
    title: 'Statistika',
    path: '/director/statistics',
    icon: <Icon icon="ant-design:pie-chart-outlined" width={22} height={22} />
  }
];
const sidebarConfig = [
  {
    title: 'Bolalar',
    path: '/dashboard/companies',
    icon: <Icon icon="emojione-v1:office-building" width={22} height={22} />
  },
  {
    title: "Bola qo'shish",
    path: '/dashboard/add-company',
    icon: <Icon icon="akar-icons:circle-plus" width={22} height={22} />
  },
  {
    title: "Qaydnoma qo'shish",
    path: '/dashboard/add-story',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
