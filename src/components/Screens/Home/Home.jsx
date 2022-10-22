import React, { useState } from 'react'

import styles from './Home.module.scss'
import { astronaut } from '../../../assets/icons'
import { useEffect } from 'react'
import Button from '../../Button/Button'

const Home = () => {
	const toRotate = [
		'Frontend-разработчик',
		'Веб-дизайнер',
		'UI/UX-дизайнер',
	]
	const period = 2000
	const [delta, setDelta] = useState(
		200 - Math.random() * 100,
	)
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta(Math.random() * (260 - 60) + 60)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(200)
		}
	}

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => clearInterval(ticker)
	}, [text])

	return (
		<div className={styles.wrapper}>
			<div className={styles.infobox}>
				<p className={styles.title}>
					{`Привет! Меня зовут Антон и я ${text}!`}
				</p>
				<p className={styles.desc}>
					Я создаю потрясающие сайты, где технологии
					встречаются с креативностью
				</p>
				<button className={styles.btn}>
					Let's Connect
				</button>
				<Button title='Contact me!' primary />
			</div>
			<div className={styles.img}>{astronaut}</div>
		</div>
	)
}

export default Home
