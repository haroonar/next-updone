import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';
// Specify the supported weights you want to include

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full">

                <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" className="flex items-center">
                        <svg width="150" height="44" viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.6347 0L35.4663 10.7385C35.4663 10.7385 35.3229 11.488 35.3102 11.5346C33.5384 20.6259 30.3195 30.2211 23.0338 36.45C17.8026 41.1968 9.01089 42.8609 3.62361 37.4493C1.17255 34.9934 0.0630296 31.7498 -0.000250863 28.4173C-0.0280633 25.3373 0.743999 22.3032 2.23988 19.6139C2.358 19.4106 2.47612 19.1905 2.59847 19.0041C2.72081 18.8178 2.90643 18.5129 3.06674 18.2801C3.22705 18.0472 3.3958 17.81 3.56455 17.5856C4.07682 16.9139 4.64106 16.2839 5.25203 15.7013C5.61905 15.371 5.99452 15.0576 6.38264 14.7655L6.77919 14.4818C7.11669 14.2404 7.45841 14.0075 7.81278 13.7958C7.98574 13.6899 8.16715 13.5841 8.34855 13.4909C8.52995 13.3977 8.70714 13.2961 8.89276 13.203C8.77464 13.3639 8.6523 13.5248 8.53839 13.6857C8.15871 14.1981 7.80012 14.7147 7.47528 15.2397C7.15044 15.7648 6.81294 16.3068 6.5092 16.8615C6.51079 16.8742 6.51079 16.887 6.5092 16.8996C6.40795 17.0817 6.31092 17.2638 6.22233 17.4459C6.13373 17.6279 6.02827 17.8227 5.93546 18.0133C5.84264 18.2038 5.74983 18.3986 5.66124 18.5934C3.23127 23.2513 2.40441 30.4498 6.74966 33.9856C6.82138 34.0406 6.90576 34.0957 7.00279 34.1592C8.61855 35.2262 10.7068 35.4041 12.6769 34.8875C14.6811 34.2893 16.4691 33.1199 17.8237 31.5211L17.9081 31.4322C20.3803 28.6459 22.0087 24.7714 22.9706 21.5025C23.7194 18.7558 24.2581 15.9558 24.5821 13.1267L19.7939 13.0844L37.6347 0Z" fill="#1C0A52" />
                            <path d="M35.6777 43.9995V14.8538H41.8877V17.6147C42.512 15.7727 44.9715 14.477 48.1355 14.477C49.5269 14.4403 50.9098 14.7054 52.1897 15.2542C53.4696 15.8031 54.6165 16.6226 55.552 17.657C56.5373 18.6831 57.3098 19.8953 57.8247 21.2233C58.3396 22.5513 58.5866 23.9687 58.5515 25.3933C58.6146 28.2821 57.5363 31.0786 55.552 33.172C54.6059 34.1932 53.4542 35.0008 52.1733 35.541C50.8925 36.0813 49.5118 36.3419 48.1229 36.3055C44.9589 36.3055 42.4994 35.0098 41.875 33.172V43.9995H35.6777ZM50.8018 29.1789C51.3038 28.688 51.6996 28.0985 51.9646 27.4471C52.2295 26.7958 52.3578 26.0967 52.3416 25.3933C52.3585 24.699 52.2298 24.0088 51.9638 23.3675C51.6978 22.7263 51.3005 22.1484 50.7975 21.6713C50.3049 21.165 49.7133 20.7664 49.06 20.5004C48.4066 20.2345 47.7055 20.1069 47.0007 20.1257C46.2784 20.1075 45.5597 20.235 44.8873 20.5004C44.2148 20.7659 43.6022 21.164 43.0858 21.6713C42.5776 22.1463 42.1743 22.723 41.9018 23.3641C41.6294 24.0051 41.4937 24.6964 41.5038 25.3933C41.4981 26.0959 41.6355 26.7922 41.9076 27.4395C42.1796 28.0868 42.5805 28.6715 43.0858 29.1578C44.1445 30.1605 45.5538 30.705 47.0092 30.6737C47.7102 30.6881 48.4069 30.5614 49.0583 30.301C49.7097 30.0407 50.3025 29.6519 50.8018 29.1578V29.1789Z" fill="#1C0A52" />
                            <path d="M75.6329 17.6149V6.7832H81.8428V35.9288H75.6329V33.1722C75.0085 35.0099 72.549 36.3057 69.385 36.3057C67.9925 36.3363 66.6091 36.0733 65.3243 35.5335C64.0395 34.9937 62.8819 34.1893 61.9263 33.1722C59.9726 31.0628 58.9135 28.273 58.9732 25.3935C58.9061 22.5254 59.967 19.7461 61.9263 17.6572C62.8727 16.6253 64.0276 15.8078 65.3138 15.2594C66.6 14.711 67.9879 14.4444 69.385 14.4772C72.549 14.4772 75.0085 15.7729 75.6329 17.6149ZM74.3672 29.1579C74.8858 28.6799 75.2984 28.0977 75.5783 27.4492C75.8581 26.8006 75.9989 26.1002 75.9914 25.3935C76.0031 24.6924 75.8641 23.997 75.5838 23.3547C75.3036 22.7124 74.8886 22.1382 74.3672 21.6715C73.8607 21.1613 73.2553 20.7609 72.5885 20.4951C71.9216 20.2292 71.2075 20.1036 70.4903 20.1259C69.7855 20.1071 69.0844 20.2347 68.431 20.5006C67.7776 20.7666 67.1861 21.1652 66.6934 21.6715C66.1905 22.1486 65.7931 22.7265 65.5271 23.3677C65.2611 24.0089 65.1324 24.6992 65.1494 25.3935C65.1366 26.0936 65.267 26.7889 65.5326 27.4364C65.7982 28.0839 66.1933 28.6698 66.6934 29.1579C67.1942 29.6503 67.7882 30.037 68.4403 30.2952C69.0924 30.5534 69.7894 30.6778 70.4903 30.6612C71.2063 30.6835 71.9196 30.5621 72.5883 30.3039C73.257 30.0458 73.8675 29.6562 74.3841 29.1579H74.3672Z" fill="#350ABC" />
                            <path d="M102.379 17.4884C103.482 18.4819 104.358 19.7024 104.948 21.0668C105.537 22.4312 105.827 23.9072 105.796 25.3941C105.823 26.8861 105.532 28.3666 104.943 29.7365C104.353 31.1065 103.479 32.3343 102.379 33.3379C100.155 35.4528 97.1947 36.6095 94.1316 36.5603C91.0544 36.6183 88.0775 35.4612 85.8419 33.3379C84.7547 32.3263 83.8922 31.0959 83.3107 29.7272C82.7291 28.3584 82.4416 26.8819 82.4669 25.3941C82.4374 23.9113 82.7231 22.4392 83.3051 21.076C83.887 19.7128 84.7519 18.4897 85.8419 17.4884C86.9419 16.4242 88.2405 15.5884 89.663 15.0289C91.0855 14.4694 92.6041 14.1972 94.1316 14.2279C97.2027 14.1748 100.169 15.3475 102.379 17.4884ZM90.2546 29.3449C90.7587 29.861 91.3628 30.2682 92.0295 30.5413C92.6963 30.8144 93.4116 30.9476 94.1316 30.9328C94.8509 30.947 95.5655 30.8135 96.2314 30.5404C96.8974 30.2674 97.5008 29.8605 98.0044 29.3449C98.5189 28.8265 98.9245 28.2097 99.197 27.5311C99.4694 26.8524 99.6033 26.1257 99.5906 25.3941C99.6054 24.6715 99.4726 23.9534 99.2006 23.2842C98.9285 22.6149 98.5229 22.0087 98.0086 21.5027C97.5127 20.974 96.9118 20.5557 96.2446 20.2749C95.5775 19.9941 94.8591 19.857 94.1358 19.8724C93.4119 19.8566 92.6928 19.9936 92.0249 20.2744C91.3571 20.5552 90.7554 20.9737 90.2589 21.5027C89.7446 22.0087 89.339 22.6149 89.0669 23.2842C88.7948 23.9534 88.6621 24.6715 88.6768 25.3941C88.6618 26.1221 88.7938 26.8456 89.065 27.521C89.3362 28.1964 89.7409 28.8096 90.2546 29.3237V29.3449Z" fill="#350ABC" />
                            <path d="M106.712 35.9296V14.8548H112.922V17.4886C113.795 15.6509 116.17 14.3975 119.043 14.3975C124.169 14.3975 127.084 17.658 127.084 23.1373V35.9296H120.878V23.8995C120.878 21.4351 119.503 19.9276 117.043 19.9276C116.493 19.909 115.945 20.0048 115.434 20.209C114.922 20.4133 114.458 20.7216 114.071 21.1145C113.684 21.5074 113.382 21.9765 113.184 22.4923C112.986 23.008 112.897 23.5592 112.922 24.1112V35.9423L106.712 35.9296Z" fill="#350ABC" />
                            <path d="M127.856 25.3517C127.856 22.0488 128.94 19.3726 131.066 17.3655C133.193 15.3584 135.939 14.3125 139.23 14.3125C142.44 14.3125 145.022 15.3584 147.021 17.4079C148.01 18.4082 148.785 19.5996 149.301 20.9098C149.816 22.22 150.061 23.6217 150.021 25.0299C150.021 25.7412 149.979 26.4103 149.937 27.037H134.045C134.167 29.5438 136.336 31.1782 139.626 31.1782C141.538 31.2038 143.381 30.4667 144.752 29.1288L148.376 32.5968C147.219 33.8345 145.817 34.8162 144.26 35.479C142.703 36.1418 141.026 36.4711 139.335 36.4459C135.876 36.4459 133.125 35.4423 131.003 33.4818C128.881 31.5212 127.856 28.8239 127.856 25.5168V25.3517ZM143.773 22.9677C143.773 21.0029 141.731 19.4573 139.23 19.4573C136.521 19.4573 134.315 21.0029 134.146 22.9677H143.773Z" fill="#350ABC" />
                            <path d="M17.9084 31.4324C15.2168 35.4932 11.2639 37.4495 7.20132 36.4544C2.65356 35.3577 0.565309 32.4105 0.0295343 28.409C0.00172186 25.329 0.773785 22.2949 2.26966 19.6056C2.38779 19.4023 2.50591 19.1822 2.62825 18.9958C2.75059 18.8095 2.93622 18.5046 3.09653 18.2717C3.25684 18.0389 3.42559 17.8017 3.59433 17.5773C4.10661 16.9057 4.67085 16.2756 5.28181 15.693C5.64884 15.3627 6.0243 15.0493 6.41242 14.7572L6.80898 14.4735C7.14648 14.2321 7.49663 13.9992 7.84678 13.7833C8.01975 13.6774 8.20115 13.5715 8.38256 13.4784C8.56396 13.3852 8.74115 13.2836 8.92677 13.1904C8.80864 13.3513 8.6863 13.5122 8.5724 13.6732L8.20959 14.1601C7.96069 14.5116 7.72022 14.8673 7.48819 15.2314C7.1507 15.7607 6.83007 16.2985 6.52211 16.8532C6.5237 16.8659 6.5237 16.8787 6.52211 16.8913C6.42508 17.0734 6.32383 17.2555 6.23524 17.4376C6.14665 17.6196 6.04118 17.8144 5.94837 18.005C5.85556 18.1955 5.76274 18.3903 5.67415 18.5851C3.24418 23.243 2.41732 30.4415 6.76258 33.9773C6.83429 34.0323 6.91867 34.0874 7.0157 34.1509C8.63146 35.218 10.7197 35.3958 12.6898 34.8792C14.6884 34.2812 16.4717 33.1149 17.824 31.5213L17.9084 31.4324Z" fill="#350ABC" />
                        </svg>

                    </a>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="#">
                                Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/staff-list">
                                Hire a Staff
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                Community
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                Login
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header
