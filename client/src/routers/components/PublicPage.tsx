import React from 'react'
import { matchPath, Routes, useLocation } from 'react-router-dom'
import { publicPage } from '../mainRouter'
import DefaultLayout from '@/layout'
import useRouter from './useRouter'


const PublicPage: React.FC = () => {
  const location = useLocation()
  const { views, routes } = useRouter({ routers: publicPage })

  const showDefaultLayout = React.useMemo(() => {
    const r = routes.find(
      (it) => it.path && matchPath(it.path, location.pathname)
    )

    return r?.defaultLayout
  }, [location.pathname, routes])

  const showSideBar = React.useMemo(() => {
    const r = routes.find(
      (it) => it.path && matchPath(it.path, location.pathname)
    )

    return r?.showSideBar
  }, [location.pathname, routes])

  return (
    <DefaultLayout
      showHeader={showDefaultLayout}
      showSideBar={showSideBar}
    >
      <Routes>{views}</Routes>
    </DefaultLayout>
  )
}

export default React.memo(PublicPage)
