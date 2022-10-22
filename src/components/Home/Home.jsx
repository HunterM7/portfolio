import React, { useState } from 'react'

import styles from './Home.module.scss'
import { astronaut } from '../../assets/icons'
import { useEffect } from 'react'

const Home = () => {
	const toRotate = [
		'Frontend Developer',
		'Web Designer',
		'UI/UX Designer',
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
			setDelta(Math.random() * (260 - 40) + 40)
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
				<p className={styles.suptitle}>
					Welcome to my Portfolio
				</p>
				<p className={styles.title}>
					{`Hi! I'm Tony and I'm a ${text}!`}
				</p>
				<p className={styles.desc}>
					Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Repudiandae laudantium, nostrum
					officiis autem tempora nulla impedit quaerat eaque
					facilis quam odit voluptatibus a eos adipisci
					ipsa! Eos veniam dicta deserunt quae eligendi odit
					neque quaerat ea, maiores sed itaque iusto?
				</p>
				<button className={styles.btn}>
					Let's Connect
				</button>
			</div>
			<div className={styles.img}>{astronaut}</div>
		</div>
	)
}

export default Home
