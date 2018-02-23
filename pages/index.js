import React from 'react'
import Head from 'next/head'

import style from '../styles/index.scss'


export default () =>
    <div>   
    
        <Head>
            <link rel="stylesheet" href="/_next/static/style.css"/>
        </Head>
            <div className={style.hello}>
            <p>ciao</p>
        </div>
    </div>