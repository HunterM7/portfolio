import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Button.module.scss'

const Button = ({ title, primary, icon }) => {
	return (
		<>
			<NavLink to='projects'>
				<div
					className={`
					${styles.wrapper}
					${primary ? styles.active : ''}
				`}
				>
					{title}
				</div>
			</NavLink>
		</>
	)
}

export default Button
