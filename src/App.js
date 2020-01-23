import React from 'react'
import { TopMenu } from 'lib/TopMenu'
import { Date } from 'lib/Date'
import { ChipsCard } from "lib/FilterChips/ChipsCard"

export const App = () => {
  return (
    <div>
      <TopMenu
        title="Techquise Components Library" />
      <Date
        text="The best day is "
        time={<i className="material-icons">schedule</i>}
        today={<i className="material-icons">today</i>} />
      <ChipsCard />
    </div>
  )
}
