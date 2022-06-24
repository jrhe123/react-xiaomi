import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// theme layout
import Layout from 'components/Layout'

// pages
const DemoPage = React.lazy(() => import('pages/DemoPage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DemoPage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
