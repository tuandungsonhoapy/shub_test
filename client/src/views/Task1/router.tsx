import React from 'react'
import { IRouter } from '@/routers/interface'

export const routerTask1: IRouter = {
  path: '/',
  loader: React.lazy(() => import('./index')),
  exact: true,
  defaultLayout: true
}
