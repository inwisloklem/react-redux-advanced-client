import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from 'styles/Header.module.sass'

class Header extends Component {
  render() {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} exact to='/'>
            Redux Auth
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink className={styles.link} to='/signup'>
            Sign Up
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink className={styles.link} to='/signin'>
            Sign In
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink className={styles.link} to='/signout'>
            Sign Out
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink className={styles.link} to='/feature'>
            Feature
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Header
