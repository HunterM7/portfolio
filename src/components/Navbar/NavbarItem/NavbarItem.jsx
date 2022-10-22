import React from 'react'
import styles from './NavbarItem.module.scss'

const NavbarItem = ({
	href,
	activeLink,
	setActiveLink,
}) => {
	return (
		<a
			href={`#${href}`}
			className={`
							${styles.link}
							${activeLink === `${href}` ? styles.active : ''}
						`}
			onClick={() => setActiveLink(`${href}`)}
		>
			{href}
		</a>
	)
}

export default NavbarItem
