"use client"

import Banner from "@/components/PageComponent/Banner"
import { SwitchProvider } from "@/components/Context/SwitchContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
const Home = () => {
  return (
    <SwitchProvider>
      <MainScreen>
        <Banner />
        <IndexPage />
      </MainScreen>
    </SwitchProvider>
  )
}

export default Home
