import React from 'react'
import styles from './flags.module.css'

export default function FlagsCountry() {


    return (
        <>
            <div className='row no-gutters justify-content-between mx-auto p-2 mb-5'>
                <div className='col-1'>
                    <a href='https://mobile.twitter.com/flux_army' target='_blank'>
                        <img src='https://pbs.twimg.com/profile_images/1466801275513696261/Qe3saVnC_400x400.jpg' className={styles.imgCarre} width={'100 rem'} alt="USA" />
                    </a>
                </div>
                <div className='col-1'>
                    <a href='https://mobile.twitter.com/FluxVenezuela' target='_blank'>
                        <img src='https://pbs.twimg.com/profile_images/1483039681533157378/HJF04rik_400x400.jpg' className={styles.imgCarre} width={'100 rem'} alt="Venezuela" />
                    </a>
                </div>
                <div className='col-1'>
                    <a href='https://mobile.twitter.com/ColombiaFlux' target='_blank'>
                        <img src='https://pbs.twimg.com/profile_images/1482938519706349573/qUCNMa6V_400x400.jpg' className={styles.imgCarre} width={'100 rem'} alt="Colombia" />
                    </a>
                </div>
                <div className='col-1'>
                    <a href='https://mobile.twitter.com/FluxPakistan' target='_blank'>
                        <img src='https://pbs.twimg.com/profile_images/1482789267340500993/4lUKPOVq_400x400.jpg' className={styles.imgCarre} width={'100 rem'} alt="Pakistan" />
                    </a>
                </div>
            </div>
            {/* <div className='row no-gutters mx-auto mb-5'>
                <div className='col-4'>
                    <a class="twitter-timeline" href="https://twitter.com/flux_army?ref_src=twsrc%5Etfw" data-width="700" data-height="1000" data-theme="dark" >Tweets by flux_army</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
                <div className='col-4'>
                    <a class="twitter-timeline" href="https://twitter.com/FluxPakistan?ref_src=twsrc%5Etfw" data-width="700" data-height="1000" data-theme="dark" >Tweets by FluxPakistan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div> */}
        </>
    )
}
