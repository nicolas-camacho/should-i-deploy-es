import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import styles from '@/styles/Home.module.css'

import Message from '@/components/Message'


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {

  const [loading, setLoading] = useState(false)

  const { data, error, isLoading, mutate } = useSWR('/api/message', fetcher);

  const refetchMessage = async () => {
    setLoading(true)
    await mutate()
    setLoading(false)
  }


  return (
    <>
      <Head>
        <title>¿Deberia lanzar a producción hoy?</title>
        <meta name="description" content="Version en español de 'Should I deploy today'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.title}>¿ Deberia lanzar a producción hoy ?</h1>
          <Message message={data?.message} error={error} loading={isLoading || loading} />
          <button className={styles.button} onClick={refetchMessage}>Refresh</button>
        </div>
      </main>
    </>
  )
}
