import React, { useEffect, useState } from 'react'

import styles from './Navbar.module.scss'
import {
	facebookLogo,
	instagramLogo,
	linkedInLogo,
	logo,
} from '../../assets/icons'

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

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<div
			className={`
			${styles.wrapper}
			${scrolled ? styles.scrolled : ''}
		`}
		>
			<div className={`container ${styles.container}`}>
				<div className={styles.logo}>{logo}</div>
				<div className={styles.links}>
					<div className={styles.nav}>
						<a
							href='#home'
							className={`
							${styles.nav__link}
							${activeLink === 'home' ? styles.active : ''}
						`}
							onClick={() => setActiveLink('home')}
						>
							Home
						</a>
						<a
							href='#skills'
							className={`
							${styles.nav__link}
							${activeLink === 'skills' ? styles.active : ''}
						`}
							onClick={() => setActiveLink('skills')}
						>
							Skills
						</a>
						<a
							href='#projects'
							className={`
							${styles.nav__link}
							${activeLink === 'projects' ? styles.active : ''}
						`}
							onClick={() => setActiveLink('projects')}
						>
							Projects
						</a>
					</div>
					<div className={styles.social}>
						<a
							className={styles.social__link}
							target='_blank'
							rel='noreferrer'
							href='https://ru.wikipedia.org/wiki/LinkedIn'
						>
							{linkedInLogo}
						</a>
						<a
							className={styles.social__link}
							target='_blank'
							rel='noreferrer'
							href='https://ru.wikipedia.org/wiki/Facebook'
						>
							{facebookLogo}
						</a>
						<a
							className={styles.social__link}
							target='_blank'
							rel='noreferrer'
							href='https://en.wikipedia.org/wiki/Instagram'
						>
							{instagramLogo}
						</a>
					</div>
					<button className={styles.connectBtn}>
						Let's connect
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
