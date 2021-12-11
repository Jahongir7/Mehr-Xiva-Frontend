import {Icon} from '@iconify/react';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';

const getIcon = (name) => {
    return <Icon icon={name} width={22} height={22}/>;
};

const tutor = [
    {
        title: "Ko\u2018rsatkichlar",
        path: '/tutor/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: "O\u2018quvchilar",
        path: '/tutor/user',
        icon: getIcon(peopleFill)
    },
    {
        title: "Guruhlarim",
        path: '/tutor/groups',
        icon: <Icon icon="clarity:users-solid" width="64" height="64"/>
    },
    {
        title: "Hisobot",
        path: '/tutor/blog',
        icon: getIcon(fileTextFill)
    }
];

export const dean = [
    {
        title: 'Ko\u2018rsatkichlar',
        path: '/dean/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'Tarbiyachilar',
        path: '/dean/user',
        icon: getIcon(peopleFill)
    },
    {
        title: 'Fakultetlar',
        path: '/dean/faculties',
        icon: <Icon icon="clarity:users-solid" width="64" height="64"/>
    },
    {
        title: 'Hisobot',
        path: '/dean/blog',
        icon: getIcon(fileTextFill)
    }
];

export const ministry = [
    {
        title: 'Ko\u2018rsatkichlar',
        path: '/ministry/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'Direktorlar',
        path: '/ministry/user',
        icon: getIcon(peopleFill)
    },
    {
        title: 'Universitetlar',
        path: '/ministry/groups',
        icon: <Icon icon="clarity:users-solid" width="64" height="64"/>
    },
    {
        title: 'Hisobot',
        path: '/ministry/blog',
        icon: getIcon(fileTextFill)
    }
];

export default tutor;
