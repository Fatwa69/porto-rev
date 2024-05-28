/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestimonialImport } from './routes/testimonial'
import { Route as ProdukImport } from './routes/produk'
import { Route as KontakImport } from './routes/kontak'
import { Route as FaqImport } from './routes/faq'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

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

const FaqRoute = FaqImport.update({
  path: '/faq',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/faq': {
      id: '/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof FaqImport
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  FaqRoute,
  KontakRoute,
  ProdukRoute,
  TestimonialRoute,
  AboutLazyRoute,
})

/* prettier-ignore-end */
