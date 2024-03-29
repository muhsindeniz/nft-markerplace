import React from 'react'
import activityCard from "../assets/img/custom/activity-card.png";
import { motion } from "framer-motion"

import { Menu, Dropdown, Tabs } from 'antd';

const { TabPane } = Tabs;

const Activity = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="profile-pictures-infos">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <main className="profile-tab-menu">

                            <h2>Activity</h2>

                            <Tabs defaultActiveKey="1" className="activity-container">
                                <TabPane tab="All" key="1" className="tab-pane">
                                    <div className="topSeller">
                                        <div className="container-fluid">
                                            <div className="w-100 d-flex justify-content-end mb-4">
                                                <button class="profile-activity-filter-mobile d-web-none"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"></rect><path clipRule="evenodd" d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z" fill="black"></path><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"></rect></svg></button>
                                            </div>

                                            <div className="topSellerContent">
                                                <div className="row">
                                                   
                                                    <div className="col-sm-12 col-lg-8 mb-4">
                                                        <div className="pt-2 pb-2 pl-3 mb-4 pr-3 activity-list-container">
                                                            <div><img src={activityCard} width="85px" /></div>
                                                            <div className="ml-3">
                                                                <h4 className="m-0"><b>123456</b></h4>
                                                                <div className="mb-1 mt-1"><span className="color-gray">Listen by🎉</span> <b>pixelpunks</b> <span className="color-gray">for</span> <b>0.05 ETH</b> </div>
                                                                <div><span className="color-gray">Just now</span></div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-2 pb-2 pl-3 mb-4 pr-3 activity-list-container">
                                                            <div><img src={activityCard} width="85px" /></div>
                                                            <div className="ml-3">
                                                                <h4 className="m-0"><b>123456</b></h4>
                                                                <div className="mb-1 mt-1"><span className="color-gray">Listen by🎉</span> <b>pixelpunks</b> <span className="color-gray">for</span> <b>0.05 ETH</b> </div>
                                                                <div><span className="color-gray">Just now</span></div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-2 pb-2 pl-3 mb-4 pr-3 activity-list-container">
                                                            <div><img src={activityCard} width="85px" /></div>
                                                            <div className="ml-3">
                                                                <h4 className="m-0"><b>123456</b></h4>
                                                                <div className="mb-1 mt-1"><span className="color-gray">Listen by🎉</span> <b>pixelpunks</b> <span className="color-gray">for</span> <b>0.05 ETH</b> </div>
                                                                <div><span className="color-gray">Just now</span></div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-2 pb-2 pl-3 mb-4 pr-3 activity-list-container">
                                                            <div><img src={activityCard} width="85px" /></div>
                                                            <div className="ml-3">
                                                                <h4 className="m-0"><b>123456</b></h4>
                                                                <div className="mb-1 mt-1"><span className="color-gray">Listen by🎉</span> <b>pixelpunks</b> <span className="color-gray">for</span> <b>0.05 ETH</b> </div>
                                                                <div><span className="color-gray">Just now</span></div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>


                                                    <div className="col-sm-12 col-lg-4 mb-4 d-mobile-none">
                                                        <div className="mr-3">
                                                            <h5><b>Filters</b></h5>
                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 5.18711V1.65443C0 1.27008 0.311582 0.958496 0.695937 0.958496H4.40931C4.59388 0.958496 4.77089 1.03182 4.90141 1.16233L9.425 5.68592C9.69678 5.9577 9.69678 6.39834 9.425 6.67012L5.87761 10.2175C5.60897 10.4861 5.17454 10.4897 4.90154 10.2255L0.211967 5.68721C0.0764892 5.55611 0 5.37564 0 5.18711Z" fill="#0E0E0E" />
                                                                    <circle cx="2.61" cy="3.22035" r="0.695937" fill="#121212" />
                                                                </svg>
                                                                <span className="ml-2">Listing</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.85986 7.57728L4.54463 10.2735L0.226562 7.57728L4.54463 0L8.85986 7.57728ZM4.54463 11.1393L0.226562 8.44309L4.54463 14.8756L8.8627 8.44309L4.54463 11.1393Z" fill="#0E0E0E" />
                                                                </svg>
                                                                <span className="ml-2">Purchases</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.78497 5.43768L6.19819 0.065918L0 8.74338L4.13212 8.33017V12.8755L9.9171 5.43768H5.78497Z" fill="#0E0E0E" />
                                                                </svg>
                                                                <span className="ml-2">Sales</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.4667 5.58078C13.5293 5.42973 13.5456 5.26352 13.5137 5.10317C13.4818 4.94282 13.403 4.79555 13.2874 4.67998L9.15527 0.547852L7.9867 1.71642L10.7081 4.43783H0.306736V6.09068H12.7031C12.8665 6.09072 13.0263 6.0423 13.1622 5.95154C13.2982 5.86078 13.4041 5.73176 13.4667 5.58078ZM0.369545 8.25344C0.306981 8.40449 0.290625 8.5707 0.322547 8.73105C0.354469 8.89139 0.433235 9.03867 0.548879 9.15424L4.681 13.2864L5.84957 12.1178L3.12815 9.39638H13.5295V7.74353H1.13316C0.969698 7.74338 0.809869 7.79176 0.673927 7.88253C0.537986 7.97331 0.43205 8.1024 0.369545 8.25344Z" fill="#0E0E0E" />
                                                                </svg>
                                                                <span className="ml-2">Transfer</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.5339 11.7109C11.4532 10.8778 11.2134 10.0076 10.8404 9.19473C10.5021 8.4544 10.0581 7.74626 9.52182 7.09168C9.37115 6.90678 9.21806 6.7297 9.13901 6.64804L8.95691 6.44901C8.91245 6.39804 8.87506 6.35712 8.83805 6.32085L8.78355 6.2656C8.72402 6.2057 8.66264 6.14358 8.61167 6.08145C8.60777 6.07643 8.60349 6.07159 8.59902 6.06675C8.57429 6.0396 8.54769 6.01244 8.51792 5.98212C8.47923 5.94287 8.43534 5.89916 8.39627 5.85005C8.39125 5.84391 8.38604 5.83796 8.38083 5.83182C8.10331 5.52676 7.86987 5.24942 7.66749 4.98454C7.43051 4.67259 7.2631 4.4146 7.12397 4.14562C6.96288 3.83926 6.84235 3.4983 6.76608 3.12963C6.69372 2.79573 6.6515 2.41255 6.64015 1.98937C6.62899 1.61363 6.65187 1.25258 6.6755 0.951426C6.69261 0.750905 6.71195 0.57345 6.73093 0.416642C6.74562 0.294432 6.69893 0.17278 6.60611 0.0918649C6.51311 0.0107637 6.38625 -0.0191842 6.26739 0.0122518C6.08994 0.0585688 5.90802 0.119953 5.72796 0.194357C5.3498 0.348561 4.97778 0.563033 4.62176 0.832564C4.16771 1.17724 3.76983 1.60303 3.43948 2.09726C3.03398 2.70124 2.74696 3.41162 2.60987 4.14916C2.45344 4.96073 2.47074 5.87646 2.65824 6.72617C2.83625 7.54871 3.18092 8.38874 3.65637 9.1579C3.90767 9.55838 4.14855 9.8932 4.38701 10.1743C4.45807 10.2626 4.65375 10.491 4.6558 10.4937L4.73392 10.5831C4.78861 10.6451 4.82767 10.6918 4.86748 10.7394C4.90431 10.7831 4.93463 10.8194 4.96848 10.8554L4.97425 10.8614C5.34627 11.3063 5.60854 11.633 5.82506 11.922C6.06427 12.2401 6.27464 12.5485 6.46791 12.8644C6.67382 13.2018 6.82095 13.4968 6.9307 13.7916C7.05458 14.127 7.13606 14.4905 7.17382 14.8735C7.2086 15.2105 7.20879 15.5885 7.17475 16.0268C7.14052 16.4243 7.07858 16.7866 7.02984 17.0521C6.99339 17.2336 6.95767 17.4012 6.92512 17.5459C6.89759 17.6685 6.93349 17.7969 7.0211 17.8869C7.09197 17.96 7.18832 17.9996 7.28821 17.9996C7.31184 17.9996 7.33564 17.9974 7.35927 17.9929C7.53393 17.9587 7.70208 17.914 7.86856 17.8575C8.25732 17.731 8.64088 17.547 9.00732 17.3121C9.48276 17.0115 9.9117 16.6261 10.2824 16.1676C10.7318 15.6118 11.0828 14.9445 11.2973 14.2386C11.5378 13.4533 11.6198 12.5787 11.5339 11.7109Z" fill="#0E0E0E" />
                                                                    <path d="M4.23929 13.9893C4.08434 13.6504 3.88159 13.3267 3.63773 13.0293C3.57635 12.954 3.50213 12.8675 3.46586 12.8299L3.38011 12.7361C3.35778 12.711 3.3416 12.6935 3.32449 12.6762L3.30105 12.6526C3.27389 12.6255 3.24674 12.5977 3.22367 12.5702C3.21958 12.5654 3.2153 12.5604 3.21084 12.5557L3.17866 12.5222C3.15987 12.5029 3.14145 12.4841 3.12564 12.4644C3.12155 12.4594 3.11727 12.4543 3.11281 12.4495C2.99023 12.315 2.88476 12.1898 2.79194 12.0687C2.71345 11.9647 2.62249 11.8381 2.54213 11.6833C2.46866 11.5434 2.41397 11.3883 2.37881 11.2192C2.34608 11.0672 2.32692 10.8924 2.32171 10.6995C2.31706 10.5393 2.32599 10.3879 2.33324 10.288C2.34273 10.1561 2.28134 10.0289 2.17197 9.95433C2.0626 9.87974 1.92197 9.86895 1.80237 9.92568C1.66472 9.99134 1.52949 10.0739 1.40003 10.1718C1.19281 10.3293 1.01127 10.5235 0.860972 10.7486C0.731881 10.9407 0.56131 11.2596 0.482256 11.6842C0.410642 12.0555 0.418268 12.474 0.503833 12.8613C0.585119 13.2373 0.742484 13.621 0.960301 13.9735C1.07507 14.156 1.18482 14.3087 1.29047 14.4333C1.32153 14.4718 1.38887 14.5498 1.41882 14.5845L1.41826 14.5851L1.45137 14.6227C1.4776 14.6522 1.49601 14.6742 1.51405 14.6961C1.52968 14.7153 1.54307 14.7311 1.55553 14.7441L1.5613 14.7503C1.67607 14.8874 1.82395 15.0665 1.95025 15.2352C2.05999 15.3809 2.15579 15.5215 2.2434 15.6653C2.33696 15.8182 2.40411 15.9527 2.45415 16.0873C2.5107 16.2406 2.54808 16.4071 2.56538 16.583C2.58119 16.7365 2.58119 16.9091 2.56594 17.1067C2.5559 17.224 2.53934 17.3479 2.5159 17.4854C2.49302 17.6184 2.54418 17.7534 2.64927 17.8381C2.71642 17.8918 2.79901 17.9199 2.88253 17.9199C2.92959 17.9199 2.97721 17.911 3.02222 17.8928C3.15169 17.8401 3.27985 17.7732 3.40075 17.6956C3.61783 17.5589 3.81407 17.3825 3.98427 17.1723C4.18925 16.919 4.34941 16.6143 4.44743 16.2921C4.55588 15.9381 4.59419 15.528 4.55588 15.1377C4.51867 14.7573 4.4093 14.3602 4.23929 13.9893Z" fill="#0E0E0E" />
                                                                </svg>
                                                                <span className="ml-2">Burns</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0)">
                                                                        <path d="M12.2497 12.8982L11.083 11.3425H6.3702L5.59239 12.8982H4.66602V13.676H13.2219V12.8982H12.2497Z" fill="#0E0E0E" />
                                                                        <path d="M2.61133 7.54321L3.05954 6.93297L4.94029 8.31437L4.49208 8.92461L2.61133 7.54321Z" fill="#0E0E0E" />
                                                                        <path d="M2.62598 5.64941L4.92828 2.51485L8.68978 5.27764L6.38747 8.4122L2.62598 5.64941Z" fill="#0E0E0E" />
                                                                        <path d="M6.55469 9.49951L9.77792 5.11112L11.0318 6.03205L7.80852 10.4204L6.55469 9.49951Z" fill="#0E0E0E" />
                                                                        <path d="M0.28418 4.89478L3.50743 0.506363L4.76126 1.42729L1.53801 5.8157L0.28418 4.89478Z" fill="#0E0E0E" />
                                                                        <path d="M1.32715 10.0044L2.49057 8.42041L3.74441 9.34134L2.58098 10.9253L1.32715 10.0044Z" fill="#0E0E0E" />
                                                                        <path d="M0.150837 11.6047C-0.103352 11.951 -0.0286822 12.4378 0.317625 12.6919C0.663933 12.9461 1.15074 12.8715 1.40493 12.5251L2.12129 11.5491L0.867253 10.6287L0.150837 11.6047Z" fill="#0E0E0E" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0">
                                                                            <rect width="13.2228" height="13.2228" fill="white" transform="translate(0 0.479248)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <span className="ml-2">Bids</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.169922 3.91723C0.16985 3.49714 0.253512 3.08125 0.416019 2.69387C0.578526 2.30648 0.816618 1.95537 1.11638 1.66106C1.41614 1.36675 1.77156 1.13514 2.16186 0.979768C2.55216 0.824396 2.96952 0.748378 3.38954 0.756157C3.8865 0.753518 4.37836 0.856533 4.8325 1.05837C5.28664 1.26022 5.6927 1.55627 6.02376 1.92693C6.35483 1.55627 6.76088 1.26022 7.21503 1.05837C7.66917 0.856533 8.16102 0.753518 8.65799 0.756157C9.07801 0.748378 9.49537 0.824396 9.88567 0.979768C10.276 1.13514 10.6314 1.36675 10.9311 1.66106C11.2309 1.95537 11.469 2.30648 11.6315 2.69387C11.794 3.08125 11.8777 3.49714 11.8776 3.91723C11.8776 7.05255 8.14344 9.41984 6.02376 11.2931C3.90877 9.40404 0.169922 7.05489 0.169922 3.91723Z" fill="#0E0E0E" />
                                                                </svg>
                                                                <span className="ml-2">Likes</span>
                                                            </button>

                                                            <button className="btn-light bg-white mr-2 mt-2">
                                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.66649 6.44117L10.7945 0.3125L11.7378 1.25517L4.66649 8.3265L0.423828 4.08383L1.36649 3.14117L4.66649 6.44117Z" fill="black" />
                                                                </svg>
                                                                <span className="ml-2">Followings</span>
                                                            </button>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </main>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Activity
