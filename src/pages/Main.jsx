import React from 'react'
import BoxForCards from '../components/Cards/BoxForCards'
import Cards from '../components/Cards/Cards'
import Header from '../components/Header/Header'

export default function Main() {
  return (
    <div>
      <Header />
      <BoxForCards />
      <Cards/>
    </div>
  )
}
