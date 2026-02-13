import { SwitchProvider } from "@/components/Context/SwitchContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import ModeTransition from "@/components/Transitions/ModeTransition"

const Home = () => {
  return (
    <SwitchProvider>
      <ModeTransition />
      <MainScreen>
        <IndexPage />
      </MainScreen>
    </SwitchProvider>
  )
}

export default Home
