import React from 'react'
import Background from '../components/Background/Background'
import BoxForCards from '../components/Cards/BoxForCards'
import Cards from '../components/Cards/Cards'
import Header from '../components/Header/Header'

export default function Main() {
  return (
    <div>
      <Background />
      <Header />
      <BoxForCards />
      <Cards/>
    </div>
  )
}
