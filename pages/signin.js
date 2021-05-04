import Head from 'next/head'
import React from 'react'
import MaterialButton from '../components/button'
import MaterialTextField from "../components/textfield";
import {Grid, Row, Col} from 'react-bootstrap'
import MContentBox from "../components/contentbox";
import {Box} from "@material-ui/core";

export default function signin() {
    function Form() {
        const registerUser = async event => {
            event.preventDefault()

            const res = await fetch(
                'https://hooks.zapier.com/hooks/catch/123456/abcde',
                {
                    body: JSON.stringify({
                        name: event.target.name.value
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }
            )

            const result = await res.json()
            // result.user => 'Ada Lovelace'
        }
    }

    return (

        <div className="container">
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                </h1>

                <div className="grid">
                    <a className="card" style={{minWidth: '480px'}}>
                        <h3>SIGN IN</h3>
                        <Box style={{marginTop: '36px', justifyContent: "center", alignItems: "center"}}>
                            <Box style={{marginLeft: '128px'}}><p><a>Username: </a><MaterialTextField/></p></Box>
                            <Box style={{marginTop: '24px', marginLeft: '128px'}}><p>
                                <a>Password: </a><MaterialTextField/></p></Box>
                            <Box style={{marginTop: '24px', marginLeft: '172px'}}><p><MaterialButton/></p></Box>
                            <Box style={{marginTop: '24px'}}>Don't have an account? <a href={'http://localhost:3000/register'} style={{color:'orange'}}> Register here</a> </Box>
                        </Box>
                    </a>
                </div>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Created by Group #5
                </a>
            </footer>

            <style jsx>{`
              .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              footer img {
                margin-left: 0.5rem;
              }

              footer a {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              .title a {
                color: #0070f3;
                text-decoration: none;
              }

              .title a:hover,
              .title a:focus,
              .title a:active {
                text-decoration: underline;
              }

              .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
              }

              .title,
              .description {
                text-align: center;
              }

              .description {
                line-height: 1.5;
                font-size: 1.3rem;
              }

              .description a {
                color: #0070f3;
                text-decoration: none;
              }

              code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.3rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
              }

              .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
              }

              .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                align-items: center;
                justify-items: center;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                font-size: 1.1rem;
                background-color: rgba(0, 112, 243, 0.2);
              }


              .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }

              .card p {
                margin: 0;
                font-size: 1.1rem;
                line-height: 1.1;
                align-items: center;
              }

              .logo {
                height: 1em;
              }

              @media (max-width: 600px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                }
              }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>


        // <body>
        // <div className="container">
        //     <main>
        //         <div>
        //             <form action="http://www.acme.com/register" method="POST">
        //                 <label htmlFor="name"></label>
        //                 <Box style={{
        //                     display: "flex",
        //                     justifyContent: "center",
        //                     alignItems: "center",
        //                     minHeight: "100px",
        //                     color: "black",
        //                     backgroundColor: "#C7F6BB",
        //                     maxWidth: '700px'
        //                 }}>
        //                     <div>
        //                         <MaterialTextField/>
        //                     </div>
        //
        //                     <div>
        //                         <MaterialTextField/>
        //                     </div>
        //
        //                     <div>
        //                         <MaterialButton/>
        //                     </div>
        //                 </Box>
        //             </form>
        //         </div>
        //     </main>
        // </div>
        // </body>
    )
}