import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { MainLayout } from '../components/layout'
import { HeroView, HomeView } from '../components/ui'


const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomeView />
      <HeroView />
    </MainLayout>
  )
}

export default HomePage
