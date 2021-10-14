import React, { useContext, useEffect } from 'react'
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import artWorkWeek5 from "../assets/img/custom/artWorkWeek5.png";
import artWorkWeek6 from "../assets/img/custom/artWorkWeek6.png";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import logo from "../assets/img/custom/cryptoioriaLogo.png";
import shape from "../assets/img/icons/custom/Shape.svg";
import fabaLogo from "../assets/img/custom/x.svg";
import { Menu, Dropdown } from 'antd';

const Cryptoloria = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                Change Price
            </Menu.Item>
            <Menu.Item>
                Transfer Token
            </Menu.Item>
            <Menu.Item>
                Burn Token
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );

    return (
        <>

            <div className="container-fluid p-0 d-flex justify-content-center align-items-center flex-column" style={{ marginTop: "100px" }}>
                <img src={logo} className="artCryptoLogo" />
                <div className="cryptoioria-banner-container">
                    <div className="position-absolute text-center d-flex flex-column">
                        <div className="navbar-brand bottom-logo-x-icons mb-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2881 24L17.4619 24.5633L17.7596 25H18.2881V24ZM12.0481 14.848L12.8744 14.2847L12.5766 13.848H12.0481V14.848ZM11.9841 14.848V13.848H11.4556L11.1579 14.2847L11.9841 14.848ZM5.74413 24V25H6.27263L6.57035 24.5633L5.74413 24ZM2.44813 24L1.62293 23.4352L0.551781 25H2.44813V24ZM10.2241 12.64L11.0493 13.2048L11.4336 12.6435L11.0526 12.0799L10.2241 12.64ZM2.54413 1.28V0.279999H0.660988L1.71568 1.84007L2.54413 1.28ZM5.74413 1.28L6.57127 0.718004L6.27367 0.279999H5.74413V1.28ZM11.9841 10.464L11.157 11.026L11.4546 11.464H11.9841V10.464ZM12.0481 10.464V11.464H12.5792L12.8766 11.024L12.0481 10.464ZM18.2561 1.28V0.279999H17.7251L17.4276 0.71998L18.2561 1.28ZM21.4881 1.28L22.3184 1.83739L23.3639 0.279999H21.4881V1.28ZM13.8401 12.672L13.0099 12.1146L12.6323 12.6771L13.0146 13.2363L13.8401 12.672ZM21.5841 24V25H23.4791L22.4097 23.4356L21.5841 24ZM19.1144 23.4367L12.8744 14.2847L11.2219 15.4113L17.4619 24.5633L19.1144 23.4367ZM12.0481 13.848H11.9841V15.848H12.0481V13.848ZM11.1579 14.2847L4.9179 23.4367L6.57035 24.5633L12.8104 15.4113L11.1579 14.2847ZM5.74413 23H2.44813V25H5.74413V23ZM3.27332 24.5648L11.0493 13.2048L9.39893 12.0751L1.62293 23.4352L3.27332 24.5648ZM11.0526 12.0799L3.37257 0.719925L1.71568 1.84007L9.39568 13.2001L11.0526 12.0799ZM2.54413 2.28H5.74413V0.279999H2.54413V2.28ZM4.91698 1.84199L11.157 11.026L12.8113 9.902L6.57127 0.718004L4.91698 1.84199ZM11.9841 11.464H12.0481V9.464H11.9841V11.464ZM12.8766 11.024L19.0846 1.84002L17.4276 0.71998L11.2196 9.90398L12.8766 11.024ZM18.2561 2.28H21.4881V0.279999H18.2561V2.28ZM20.6579 0.72261L13.0099 12.1146L14.6704 13.2294L22.3184 1.83739L20.6579 0.72261ZM13.0146 13.2363L20.7586 24.5644L22.4097 23.4356L14.6657 12.1077L13.0146 13.2363ZM21.5841 23H18.2881V25H21.5841V23Z" fill="black" />
                            </svg>
                        </div>
                        <a href="javascript:void(0)" className="navbar-brand mb-3 pl-0 mr-0">
                            <img src={fabaLogo} width="30" alt="" />
                            <span className="ml-2">Starlight</span>
                        </a>
                        <div className="pl-4 pr-4">
                        The enchanted universe of Cryptoloria in partnership with Starlight
                            Exclusive NFT collection drops
                        </div>
        
                            <div className="d-flex justify-content-center mt-4">
                                <div className="crypto-border-right">
                                        <h4 className="m-0"><b>4</b></h4>
                                        <div>Days</div>
                                </div>

                                <div className="crypto-border-right">
                                        <h4 className="m-0"><b>5</b></h4>
                                        <div>Hours</div>
                                </div>

                                <div className="crypto-border-right">
                                        <h4 className="m-0"><b>43</b></h4>
                                        <div>Minutes</div>
                                </div>

                                <div className="ml-4">
                                    <h4 className="m-0"><b>25</b></h4>
                                    <div>Seconds</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


            <section className="artWorkWeekSection">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3><b>msDoge Collection 01</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5 position-relative mt-3">
                            <img src={artWorkWeekOne} width="100%" alt="" />
                            <div className="art-work-description-container">
                                <h4 className="mb-0">The Black</h4>
                                <small>Original Series</small>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 position-relative">
                            <div className="d-flex overflow-auto">
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek1} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek2} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek3} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex overflow-auto">
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek4} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek5} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek6} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="liveAuction quickExplore cryptoloria-hidden-bids">
                <div className="container-fluid">

                    <div className="d-flex justify-content-between mb-3">
                        <h3><b>Hidden Bids</b></h3>
                    </div>

                    <div className="w-100 headerSelect d-flex justify-content-between">
                        <div className="row">
                            <div className="col-sm-12 col-lg-3">
                                <div className="liveAuction-card-container cryptoloria-blue-images">
                                    <div className="live-image">
                                        <img src={artWorkWeek2} className="nft-rich-art" width="100%" alt="" />
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>

                                    <div className="bg-white p-4">
                                        <div className="position-relative live-user-list">
                                            <img src={topSellerUser1} width="36px" alt="" />
                                            <img src={topSellerUser2} width="36px" alt="" />
                                            <img src={topSellerUser3} width="36px" alt="" />
                                            <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                        </div>

                                        <h6>Memescalf#782021</h6>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-danger"><b>1.2 WETH</b></div>
                                            <small className="text-secondary">Highest bid 1/1</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-3">
                                <div className="liveAuction-card-container">
                                    <div className="live-image">
                                        <img src={artWorkWeek3} className="nft-rich-art" width="100%" alt="" />
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>

                                    <div className="bg-white p-4">
                                        <div className="position-relative live-user-list">
                                            <img src={topSellerUser1} width="36px" alt="" />
                                            <img src={topSellerUser2} width="36px" alt="" />
                                            <img src={topSellerUser3} width="36px" alt="" />
                                            <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                        </div>

                                        <h6>Memescalf#782021</h6>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-danger"><b>1.2 WETH</b></div>
                                            <small className="text-secondary">Highest bid 1/1</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-3">
                                <div className="liveAuction-card-container">
                                    <div className="live-image">
                                        <img src={artWorkWeek4} className="nft-rich-art" width="100%" alt="" />
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>

                                    <div className="bg-white p-4">
                                        <div className="position-relative live-user-list">
                                            <img src={topSellerUser1} width="36px" alt="" />
                                            <img src={topSellerUser2} width="36px" alt="" />
                                            <img src={topSellerUser3} width="36px" alt="" />
                                            <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                        </div>

                                        <h6>Memescalf#782021</h6>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-danger"><b>1.2 WETH</b></div>
                                            <small className="text-secondary">Highest bid 1/1</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-3">
                                <div className="liveAuction-card-container">
                                    <div className="live-image">
                                        <img src={artWorkWeek1} className="nft-rich-art" width="100%" alt="" />
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>

                                    <div className="bg-white p-4">
                                        <div className="position-relative live-user-list">
                                            <img src={topSellerUser1} width="36px" alt="" />
                                            <img src={topSellerUser2} width="36px" alt="" />
                                            <img src={topSellerUser3} width="36px" alt="" />
                                            <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                        </div>

                                        <h6>Memescalf#782021</h6>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-danger"><b>1.2 WETH</b></div>
                                            <small className="text-secondary">Highest bid 1/1</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Cryptoloria
