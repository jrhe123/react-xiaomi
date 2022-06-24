import React from 'react'
import { useTranslation } from 'react-i18next'

import { PostContainer } from 'features/posts'
import TitleTypography from 'libs/ui/components/TitleTypography'

const DemoPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <TitleTypography title={t('demo.title')} />
      <PostContainer />
    </>
  )
}

export default DemoPage
