/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/_public'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as DashboardIndexImport } from './routes/_dashboard/index'
import { Route as PublicLoginImport } from './routes/_public/login'
import { Route as DashboardSettingsImport } from './routes/_dashboard/settings'
import { Route as DashboardPatientsImport } from './routes/_dashboard/patients'
import { Route as DashboardAppointmentsImport } from './routes/_dashboard/appointments'

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const PublicLoginRoute = PublicLoginImport.update({
  path: '/login',
  getParentRoute: () => PublicRoute,
} as any)

const DashboardSettingsRoute = DashboardSettingsImport.update({
  path: '/settings',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardPatientsRoute = DashboardPatientsImport.update({
  path: '/patients',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardAppointmentsRoute = DashboardAppointmentsImport.update({
  path: '/appointments',
  getParentRoute: () => DashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard/appointments': {
      id: '/_dashboard/appointments'
      path: '/appointments'
      fullPath: '/appointments'
      preLoaderRoute: typeof DashboardAppointmentsImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/patients': {
      id: '/_dashboard/patients'
      path: '/patients'
      fullPath: '/patients'
      preLoaderRoute: typeof DashboardPatientsImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/settings': {
      id: '/_dashboard/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof DashboardSettingsImport
      parentRoute: typeof DashboardImport
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginImport
      parentRoute: typeof PublicImport
    }
    '/_dashboard/': {
      id: '/_dashboard/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  DashboardRoute: DashboardRoute.addChildren({
    DashboardAppointmentsRoute,
    DashboardPatientsRoute,
    DashboardSettingsRoute,
    DashboardIndexRoute,
  }),
  PublicRoute: PublicRoute.addChildren({ PublicLoginRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_dashboard",
        "/_public"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/appointments",
        "/_dashboard/patients",
        "/_dashboard/settings",
        "/_dashboard/"
      ]
    },
    "/_public": {
      "filePath": "_public.tsx",
      "children": [
        "/_public/login"
      ]
    },
    "/_dashboard/appointments": {
      "filePath": "_dashboard/appointments.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/patients": {
      "filePath": "_dashboard/patients.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/settings": {
      "filePath": "_dashboard/settings.tsx",
      "parent": "/_dashboard"
    },
    "/_public/login": {
      "filePath": "_public/login.tsx",
      "parent": "/_public"
    },
    "/_dashboard/": {
      "filePath": "_dashboard/index.tsx",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */