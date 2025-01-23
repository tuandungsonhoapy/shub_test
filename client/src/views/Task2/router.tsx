import React from 'react'
import { IRouter } from '@/routers/interface'

export const routerTask2: IRouter = {
  path: '/task2',
  loader: React.lazy(() => import('./index')),
  exact: true,
  defaultLayout: true
}
