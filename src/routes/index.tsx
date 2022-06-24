import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// theme layout
import Layout from 'components/Layout'

// pages
const HomePage = React.lazy(() => import('pages/HomePage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
