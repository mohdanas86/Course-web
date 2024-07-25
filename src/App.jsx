import React from 'react'
import "./App.css"

import Hero from "./components/Hero.jsx"
import List from "./components/List.jsx"
import ContactBanner from "./components/contactBanner.jsx"
import CourserList from "./components/CourserList.jsx"

const App = () => {
  return (
    <>
    <Hero />
    <List />
    <ContactBanner />
    <CourserList />
    </>
  )
}

export default App