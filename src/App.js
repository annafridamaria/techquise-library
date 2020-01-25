import React from 'react'
import { TopMenu } from 'lib/TopMenu'
import { Dialog } from "lib/Dialog"
import { ChipsCard } from "lib/FilterChips/ChipsCard"


export const App = () => {
  return (
    <div>
      <TopMenu
        title="Techquise Components Library"
      />
      {/* <Dialog title="Dialog header" /> */}
      <ChipsCard />
    </div>
  )
}
