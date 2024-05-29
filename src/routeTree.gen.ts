/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestimonialImport } from './routes/testimonial'
import { Route as ProdukImport } from './routes/produk'
import { Route as KontakImport } from './routes/kontak'
import { Route as HomeImport } from './routes/home'
import { Route as FaqImport } from './routes/faq'
import { Route as AboutImport } from './routes/about'

// Create/Update Routes

const TestimonialRoute = TestimonialImport.update({
  path: '/testimonial',
  getParentRoute: () => rootRoute,
} as any)

const ProdukRoute = ProdukImport.update({
  path: '/produk',
  getParentRoute: () => rootRoute,
} as any)

const KontakRoute = KontakImport.update({
  path: '/kontak',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const FaqRoute = FaqImport.update({
  path: '/faq',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/faq': {
      id: '/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof FaqImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/kontak': {
      id: '/kontak'
      path: '/kontak'
      fullPath: '/kontak'
      preLoaderRoute: typeof KontakImport
      parentRoute: typeof rootRoute
    }
    '/produk': {
      id: '/produk'
      path: '/produk'
      fullPath: '/produk'
      preLoaderRoute: typeof ProdukImport
      parentRoute: typeof rootRoute
    }
    '/testimonial': {
      id: '/testimonial'
      path: '/testimonial'
      fullPath: '/testimonial'
      preLoaderRoute: typeof TestimonialImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AboutRoute,
  FaqRoute,
  HomeRoute,
  KontakRoute,
  ProdukRoute,
  TestimonialRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/faq",
        "/home",
        "/kontak",
        "/produk",
        "/testimonial"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/faq": {
      "filePath": "faq.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/kontak": {
      "filePath": "kontak.tsx"
    },
    "/produk": {
      "filePath": "produk.tsx"
    },
    "/testimonial": {
      "filePath": "testimonial.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
