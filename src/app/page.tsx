"use client"

import Banner from "@/components/PageComponent/Banner"
import { SwitchProvider } from "@/components/Context/SwitchContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import { TitleUpdater } from "@/utils/TitleUpdater"
import SkipLinks from "@/components/Accessibility/SkipLinks"
import FirstVisitTooltip from "@/components/Onboarding/FirstVisitTooltip"
import KeyboardShortcuts from "@/components/Accessibility/KeyboardShortcuts"
import InstallPrompt from "@/components/PWA/InstallPrompt"
import { usePersonaSEO } from "@/hooks/usePersonaSEO"

const Home = () => {
  return (
    <SwitchProvider>
      <SkipLinks />
      <KeyboardShortcuts />
      <TitleUpdater />
      <FirstVisitTooltip />
      <InstallPrompt />
      <PersonaSEOUpdater />
      <MainScreen>
        <Banner />
        <IndexPage />
      </MainScreen>
    </SwitchProvider>
  )
}

// Component to handle SEO updates
const PersonaSEOUpdater = () => {
  usePersonaSEO()
  return null
}

export default Home
