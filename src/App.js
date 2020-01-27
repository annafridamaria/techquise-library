import React from 'react'
import { TopMenu } from 'lib/TopMenu'
import { FancyButton } from 'lib/Buttons/FancyButton'
import { LessFancyButton } from 'lib/Buttons/LessFancyButton'

export const App = () => {
  return (
    <div>
      <TopMenu
        title="Techquise Components Library"
      />
      <FancyButton />
      <LessFancyButton />
    </div>
  )
}
