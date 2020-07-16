import React from 'react'
import HomepageCards from './HomepageCards'

export default function Home () {
    return (
        <div id="homepageContainer">
        <div className="pageHeader">
        Welcome to the Game Room!
        <HomepageCards />
        </div>
        </div>
    )
}