import React from 'react'
import { Route } from 'react-router-dom'

import { IRouter } from '@/routers/interface'
import Loading from '@/shared/components/Loading'

interface IShowRouter {
  routers: IRouter[]
  privateRoute?: boolean
}

const renderRoute = (router: IRouter) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DynamicComponent: any = router.loader
  return (
    <Route
      key={router.path}
      path={router.path}
      element={
        <React.Suspense fallback={<Loading />}>
          <DynamicComponent />
        </React.Suspense>
      }
    />
  )
}

const useRouter = ({ routers, privateRoute }: IShowRouter) => {
  return React.useMemo(() => {
    if (privateRoute) {
      const pages = routers.filter(
        (it: IRouter) =>
          it.permissionCode === 'ALLOW' ||
          it.permissionCode == null ||
          it.path !== '*'
      )
      return { views: pages.map((it) => renderRoute(it)), routes: pages }
    }

    return { views: routers.map((it) => renderRoute(it)), routes: routers }
  }, [routers, privateRoute])
}

export default useRouter
