import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseWrapper = ({children}) => {
    return (
        <div className="wrapper">
            <header><Header/></header>
            <main className="content-container" >{children}</main>
            <footer><Footer/></footer>
        </div>
    )
}

export default BaseWrapper