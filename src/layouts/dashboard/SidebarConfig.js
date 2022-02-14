import { Icon } from '@iconify/react';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Tashkilotlar',
    path: '/dashboard/companies',
    icon: <Icon icon="emojione-v1:office-building" width={22} height={22} />
  },
  {
    title: "Tashkilot qo'shish",

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
