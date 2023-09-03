import React from 'react'
import Navbar from '../components/Navbar'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../components/font/LINESeedSansTH_W_Rg.woff2' })



export default function Layout({children}:any) {
  return (
	<div className={myFont.className}>
		<Navbar/>
		<main>
			{children}
		</main>
	</div>
  )
}

