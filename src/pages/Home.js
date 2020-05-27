import React from 'react'
import BaseWrapper from '../components/BaseWrapper'
import HeaderImage from '../components/HeaderImage'
import WhatWeDo from '../components/WhatWeDo'
import Expertise from '../components/Expertise'
import Detail from '../components/Detail'
import SocialMedia from '../components/SocialMedia'

const Home = () => {
    return (
        <BaseWrapper>
            <HeaderImage/>
            <WhatWeDo/>
            <Expertise/>
            <Detail/>
            <SocialMedia/>
        </BaseWrapper>
    )
}

export default Home