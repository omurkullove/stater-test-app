import React from 'react';
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig';

export const publicRoutes = [
  {
    key: 'login',
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() =>
      import('views/auth-views/authentication/login')
    ),
  },
  {
    key: 'register',
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(() =>
      import('views/auth-views/authentication/register')
    ),
  },
  {
    key: 'forgot-password',
    path: `${AUTH_PREFIX_PATH}/forgot-password`,
    component: React.lazy(() =>
      import('views/auth-views/authentication/forgot-password')
    ),
  },
];

export const protectedRoutes = [
  {
    key: 'dashboard.default',
    path: `${APP_PREFIX_PATH}/dashboards/default`,
    component: React.lazy(() => import('views/app-views/dashboards/default')),
  },
  {
    key: 'dashboard.catalog.products',
    path: `${APP_PREFIX_PATH}/dashboards/catalog/products`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/catalog/products')
    ),
  },
  {
    key: 'dashboard.catalog.categories',
    path: `${APP_PREFIX_PATH}/dashboards/catalog/categories`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/catalog/categories')
    ),
  },
  {
    key: 'dashboard.catalog.collections',
    path: `${APP_PREFIX_PATH}/dashboards/catalog/collections`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/catalog/collections')
    ),
  },
  {
    key: 'dashboard.catalog.combo',
    path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/catalog/combo')
    ),
  },
  {
    key: 'dashboard.orders',
    path: `${APP_PREFIX_PATH}/dashboards/orders`,
    component: React.lazy(() => import('views/app-views/dashboards/orders')),
  },
  {
    key: 'dashboard.сustomers.customersList',
    path: `${APP_PREFIX_PATH}/dashboards/customers/list`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/customers/list')
    ),
  },
  {
    key: 'dashboard.customers.customersGroup',
    path: `${APP_PREFIX_PATH}/dashboards/customers/group`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/customers/group')
    ),
  },
  {
    key: 'dashboard.banners',
    path: `${APP_PREFIX_PATH}/dashboards/banners`,
    component: React.lazy(() => import('views/app-views/dashboards/banners')),
  },
  {
    key: 'dashboard.promocodes',
    path: `${APP_PREFIX_PATH}/dashboards/promocodes`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/promocodes')
    ),
  },
  {
    key: 'dashboard.offlinePoints.offlinePointsAddress',
    path: `${APP_PREFIX_PATH}/dashboards/offlinePoints/address`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/offlinePoints/address')
    ),
  },
  {
    key: 'dashboard.offlinePoints.offlinePointsGeofences',
    path: `${APP_PREFIX_PATH}/dashboards/offlinePoints/geofences`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/offlinePoints/geofences')
    ),
  },
  {
    key: 'dashboard.staff',
    path: `${APP_PREFIX_PATH}/dashboards/staff`,
    component: React.lazy(() => import('views/app-views/dashboards/staff')),
  },
  {
    key: 'dashboard.mailing',
    path: `${APP_PREFIX_PATH}/dashboards/mailing`,
    component: React.lazy(() => import('views/app-views/dashboards/mailing')),
  },
  {
    path: `${APP_PREFIX_PATH}/dashboards/customers/list/:id`,
    component: React.lazy(() =>
      import('views/app-views/dashboards/customers/choosed')
    ),
  },

  {
    key: 'system.settings',
    path: `${APP_PREFIX_PATH}/system/settings`,
    component: React.lazy(() => import('views/app-views/system/settings')),
  },
  {
    key: 'system.mobileApp',
    path: `${APP_PREFIX_PATH}/system/mobileApp`,
    component: React.lazy(() => import('views/app-views/system/mobileApp')),
  },
  {
    key: 'system.logs',
    path: `${APP_PREFIX_PATH}/system/logs`,
    component: React.lazy(() => import('views/app-views/system/logss')),
  },
];
