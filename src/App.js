import React from 'react'
import { TopMenu } from 'lib/TopMenu'
import { FancyButton } from 'lib/Buttons/FancyButton'
import { LessFancyButton } from 'lib/Buttons/LessFancyButton'
import { Dialog } from "lib/Dialog"
import { ChipsCard } from "lib/FilterChips/ChipsCard"


export const App = () => {
  return (
    <div>
      <TopMenu
        title="Techquise Components Library"
      />
      <FancyButton />
      <LessFancyButton />
      {/* <Dialog title="Dialog header" /> */}
      <ChipsCard />
    </div>
  )
}
