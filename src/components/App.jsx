import React from 'react'
import Header from 'components/Header'
import { BrowserRouter } from 'react-router-dom'
import styles from 'styles/App.module.sass'

function App() {
  return (
    <BrowserRouter>
      <main className={styles.app}>
        <Header />
      </main>
    </BrowserRouter>
  )
}

export default App
