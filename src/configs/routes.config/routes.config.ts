import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'dashboard',
        path: '/dashboard',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'employees.list',
        path: '/employees',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },
    {
        key: 'employees.add',
        path: '/employees/add',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
        meta: {
            header: {
                title: 'Create Employee',
                description:
                    'Manage employee details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    {
        key: 'employees.import',
        path: '/employees/import',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
        meta: {
            header: {
                title: 'Import Employees',
                description:
                    'Manage employee details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    {
        key: 'employees.import-history',
        path: '/employees/import-history',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },

    {
        key: 'employees.generate-document',
        path: '/employees/generate-document',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },

    {
        key: 'employees.update-request',
        path: '/employees/update-request',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },

    {
        key: 'organization.clientgroup',
        path: '/organization/client-groups',
        component: lazy(
            () => import('@/views/Organization/ClientGroupList/index'),
        ),
        authority: [],
    },
    {
        key: 'organization.company',
        path: '/organization/companies',
        component: lazy(
            () => import('@/views/Organization/OrganizationList/index'),
        ),
        authority: [],
    },
    {
        key: 'organization.location',
        path: '/organization/locations',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
    },

    {
        key: 'organization.sub-location',
        path: '/organization/sub-locations',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
    },

    {
        key: 'organization.announcement',
        path: '/organization/announcements',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
    },

    {
        key: 'organization.policy',
        path: '/organization/policies',
        component: lazy(() => import('@/views/Customers/AddCustomer/index')),
        authority: [],
    },

    // routes for roles and permissions

    {
        key: 'rolesandpermission.users',
        path: '/users',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },
    {
        key: 'rolesandpermission.roles',
        path: '/roles',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },

    {
        key: 'rolesandpermission.permissions',
        path: '/permissions',
        component: lazy(() => import('@/views/Customers/CustomerList/index')),
        authority: [],
    },

    ...othersRoute,
]
