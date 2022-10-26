import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
    children: React.ReactNode,
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>{'Coffe Company - Landing'}</title>
                <meta name="description" content={`Information about coffe`} />
                <meta name="keywords" content={`pokedex, pokemon, poke `} />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="author" content="Marlon Morales" />
                <meta property='og:title' content={`Information about coffe`} />
                <meta property='og:description' content={`This is the description about coffe`} />
                {/* <meta property='og:image' content={`${origin}/banner.png`} /> */}
            </Head>
            <nav>
                <Navbar />
            </nav>
            {/* Side Bar */}
            <main style={{
                margin: "80px auto",
                maxWidth: "1440px",
                padding: "0 30px"

            }}>
                {children}
            </main>
            <footer>
                {/* TODO: Footer */}
            </footer>

        </>
    )
}
