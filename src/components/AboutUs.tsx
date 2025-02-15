import React from 'react'
import Heading from './common/Heading'
const AboutUs = () => {
    return (
        <div className='bg-blue'>
            <div className='bg-blue relative xl:py-[210px] md:pt-24 pt-[61px] xl:flex items-center justify-center max-w-[1920px] mx-auto' >
                <div className="container max-w-[1140px] mx-auto px-4 relative z-10">
                    <div className='xl:max-w-[550px] max-xl:mx-auto max-xl:w-full'>
                        <Heading text="ABOUT US" />
                        <div className='flex gap-5 pb-2 pt-7 xl:max-w-[510px] items-start'>
                            <img src="./assets/images/svg/nft.svg" alt="nft" />
                            <p className='font-normal text-base leading-customXl text-white '>Smerse is the world’s first sport-to-earn NFT Avatar project that pays for doing sport.</p>
                        </div>
                        <div className='flex gap-5 pb-2 xl:max-w-[510px] items-start'>
                            <img src="./assets/images/svg/coins.svg" alt="coins" />
                            <p className='font-normal text-base leading-customXl text-white '>Our users will be able to earn token reward for completing fitness challenges around walking, jogging, running or other exercises.</p>
                        </div>
                        <div className='flex gap-5 pb-2 xl:max-w-[510px] items-start'>
                            <img src="./assets/images/svg/rewards.svg" alt="reward" />
                            <p className='font-normal text-base leading-customXl text-white '>These rewards can then be used in-game to level up
                                their Avatars, mint Avatar equipment, or they can be
                                traded and rented to others.</p>
                        </div>
                        <div className='flex gap-5 pb-2 xl:max-w-[510px] items-start'>
                            <img src="./assets/images/svg/gift.svg" alt="gift" />
                            <p className='font-normal text-base leading-customXl text-white '>Users can earn additional rewards, including rare NFTs the more they engage in physical activity</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='xl:max-w-[954px] md:block hidden max-xl:w-full xl:absolute xl:right-0 xl:bottom-[8%]' src="./assets/images/webp/about-us-image.webp" alt="about-us" />
                    <img className='md:hidden block' src="./assets/images/webp/about-sm-image.webp" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs