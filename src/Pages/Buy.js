import React, { useState } from 'react'
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import userTick from "../assets/img/custom/userTick.png";
import logo from "../assets/img/icons/custom/logo.svg";
import start from "../assets/img/icons/custom/start.svg";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import FinishedCollectiblePopup from '../Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from '../Components/Popup/PlaceABidFollowPopup';
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"

const Buy = () => {
    const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
    const [singlePopup, setSinglePopup] = useState(false);

    const menu = (
        <Menu>
            <Menu.Item>
                New bid
            </Menu.Item>
            <Menu.Item>
                Purchase now
            </Menu.Item>
            <div className="mt-3 mb-3 border-bottom w-100"></div>
            <Menu.Item>
                View on opensea
            </Menu.Item>
            <Menu.Item>
                Refresh Metadata
            </Menu.Item>
            <Menu.Item>
                Share
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }


    return (
        <>

            {
                singleCollectionPopup && <FinishedCollectiblePopup setSinglePopup={setSinglePopup} setSingleCollectionPopup={setSingleCollectionPopup} />
            }

            {
                singlePopup && <PlaceABidFollowPopup setSinglePopup={setSinglePopup} />
            }

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="buy-art-work-week">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <img src={artWorkWeekOne} className="border-radius" width="100%" alt="" />
                        </div>
                        <div className="col-sm-12 col-lg-7 ">
                            <div className="buy-art-work-week-card border-radius">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h1>Artwork of the week</h1>
                                    <div className="d-flex">
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ml-2" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span className="text-secondary">Highest bid </span>
                                    <span className="color-ping">0.066 wETH</span>
                                </div>

                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="w-100 d-flex">
                                    <div className="d-flex flex-column">
                                        <b className="text-secondary">Creator</b>
                                        <div className="mt-3">
                                            <img src={userTick} width="36" alt="" />
                                            <span className="ml-3"><b>Courtney</b></span>
                                        </div>
                                    </div>
                                    <div className="ml-5">
                                        <b className="text-secondary">Creator</b>
                                        <div className="mt-3">
                                            <img src={logo} width="36" alt="" />
                                            <span className="ml-3"><b>EdenSwap</b></span>
                                        </div>
                                    </div>
                                </div>


                                <button className="btn-primary-outline-responsive mt-4 pt-2 pb-2 pl-3 pr-3 text-dark d-flex align-items-center">
                                    <img src={start} className="mr-2" width="16" alt="" /> 10% of sales will go to creator
                                </button>


                                <div className="mt-5">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Owner</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Bids</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">History</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b> <span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>

                                                <button className="btn-ping" style={{ height: "45px" }}>Buy</button>
                                            </div>

                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">1 edition </span><b>not for sale</b></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><b>0.0002 ETH </b><span className="color-gray">by </span><b>tanelen tivan </b><span className="color-gray">for 10 editions</span></div>
                                                        <div><span className="color-gray">26/072021, 16:28</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane-bottom-solid"></div>
                                </div>


                                <div className="d-flex mt-4 justify-content-center mt-5 buy-font">
                                    <div className="pr-3 border-right">
                                        <span className="text-secondary">Highest bid by </span><span><b>The first of art</b></span>
                                        <div className="d-flex mt-2">
                                            <div>
                                                <img src={topSellerUser4} width="42" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <h5 className="m-1"><b>0.066 wETH</b></h5>
                                                <div className="text-secondary">~$261</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pl-3 ">
                                        <div className="text-secondary">Auction ends in</div>
                                        <div className="d-flex mt-3">
                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>0</b></h5>
                                                <div className="text-secondary">Days</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>9</b></h5>
                                                <div className="text-secondary">Hours</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>6</b></h5>
                                                <div className="text-secondary">Minutes</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>21</b></h5>
                                                <div className="text-secondary">Seconds</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-sm-12 col-lg-8 d-flex">
                                        <button className="btn-ping  w-100" onClick={() => setSingleCollectionPopup(true)}>
                                            Buy for 1.25 ETH
                                        </button>

                                        <button className="btn-primary-outline ml-3 w-100 d-mobile-none" onClick={() => setSingleCollectionPopup(true)}>
                                            Place a Bid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Buy
