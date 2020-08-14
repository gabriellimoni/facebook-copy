import React from 'react'
import './globals.css'

import Header from './components/Header'
import LeftNavbarItems from './components/LeftNavbarItems'
import RightNavbar from './components/RightNavbar'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content-container">

        <div className="left-sidebar">
          <section>
            <LeftNavbarItems />
          </section>
        </div>

        <div className="center-content">
          <section>
            Center content
          </section>
        </div>

        <div className="right-sidebar">
          <section>
            <RightNavbar />
          </section>
        </div>

      </div>
    </div>
  )
}

export default App
