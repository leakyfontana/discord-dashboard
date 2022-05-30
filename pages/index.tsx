import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ChannelNav from '../components/channel-nav'
import ChannelSelect from '../components/channel-select'
import MultiChannelView from '../components/channel-board'
import styles from '../styles/Home.module.css'
import ChannelBoard from '../components/channel-board'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-discord-grey">
      <Head>
        <title>JASN.</title>
        <meta name="description" content="All your messages in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-row'>
        <ChannelNav />
        <ChannelSelect />
        <ChannelBoard />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
