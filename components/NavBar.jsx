import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
        <ActiveLink href='/' text='Home' />
        <ActiveLink href='/about' text='About' />
        <ActiveLink href='/contact' text='Contact' />
    </nav>
  )
}
