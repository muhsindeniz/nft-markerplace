import React from 'react'
import artWork from '../assets/img/custom/artWorkWeekOne.png';

const FullScreenImage = () => {
    return (
        <>
            <section className="buy-art-work-week">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-lg-7">
                            <img src={artWork} style={{borderRadius: "15px"}} width="100%" />
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <div>
                            <span>Listed 1 edition for </span><b>0.024 ETH</b>
                            </div>

                            <div><span className="color-gray">By </span> <b>Mad Scientist</b> <span className="color-gray"> 1 hour ago</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FullScreenImage
