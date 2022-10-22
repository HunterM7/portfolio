import React, { useEffect, useState } from 'react'

import NavbarItem from './NavbarItem/NavbarItem'

import styles from './Navbar.module.scss'

const Navbar = () => {
	// Active Link
	const [activeLink, setActiveLink] = useState('home')

	// User scroll
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 50
				? setScrolled(true)
				: setScrolled(false)
		}

		window.addEventListener('scroll', onScroll)

		return () =>
			window.removeEventListener('scroll', onScroll)
	}, [])

	// Links
	const links = ['home', 'works', 'about-me', 'contacts']

	const linksList = links.map((el) => (
		<NavbarItem
			href={el}
			activeLink={activeLink}
			setActiveLink={setActiveLink}
		/>
	))

	return (
		<div
			className={`
			${styles.wrapper}
			${scrolled ? styles.scrolled : ''}
		`}
		>
			<div className={`container ${styles.container}`}>
				<p className={styles.logo}>Logo</p>
				<nav className={styles.nav}>{linksList}</nav>
			</div>
		</div>
	)
}

export default Navbar
