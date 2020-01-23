import React from 'react'
import { TopMenu } from 'lib/TopMenu'
import { ChipsCard } from "lib/FilterChips/ChipsCard"


export const App = () => {
  return (
    <div>
      <TopMenu
        title="Techquise Components Library"
      />

      <ChipsCard />
    </div>
  )
}
