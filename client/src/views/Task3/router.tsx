import React from 'react'
import { IRouter } from '@/routers/interface'

export const routerTask3: IRouter = {
  path: '/task3',
  loader: React.lazy(() => import('./index')),
  exact: true,
  defaultLayout: true
}
