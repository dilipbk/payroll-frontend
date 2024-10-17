import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'employees',
        path: '',
        title: 'Employees',
        translateKey: 'nav.employees.employees',
        icon: 'employees',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'employees.list',
                path: '/employees',
                title: 'Employees',
                translateKey: 'nav.employees.list',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'employees.add',
                path: '/employees/add',
                title: 'Add Employee',
                translateKey: 'nav.employees.add',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'groupMenu',
        path: '',
        title: 'Group Menu',
        translateKey: 'nav.groupMenu.groupMenu',
        icon: 'groupMenu',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'groupMenu.single',
                path: '/group-single-menu-item-view',
                title: 'Group single menu item',
                translateKey: 'nav.groupMenu.single',
                icon: 'groupSingleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'groupMenu.collapse',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.collapse.collapse',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.collapse.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.collapse.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.item2',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Menu item 2',
                        translateKey: 'nav.groupMenu.collapse.item2',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default navigationConfig
