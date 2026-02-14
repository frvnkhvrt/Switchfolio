import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import ModeTransition from "@/components/Transitions/ModeTransition"

const Home = () => {
  return (
    <>
      <ModeTransition />
      <MainScreen>
        <IndexPage />
      </MainScreen>
    </>
  )
}

export default Home
