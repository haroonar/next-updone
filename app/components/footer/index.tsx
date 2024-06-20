import React from "react"

const Footer = () => {
    return (
        <div className="bg-[#2c2240]">
            <div style={{ margin: '0 100px' }}>
            <footer className="relative bg-[#2c2240] text-white pt-8 pb-6 footer-image">
                <div className="container mx-auto px-4">
                    <div className="flex text-left lg:text-left">
                        <div className="w-full space-y-4 lg:w-6/12 px-4 pl-[90px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="165" height="48" viewBox="0 0 165 48" fill="none">
                                <g clip-path="url(#clip0_910_973)">
                                    <path d="M41.5417 0.158203L39.177 11.8344C39.177 11.8344 39.0206 12.6493 39.0068 12.7C37.0746 22.5851 33.5643 33.0182 25.6191 39.7909C19.9143 44.9522 10.3267 46.7617 4.45173 40.8775C1.77878 38.2071 0.568824 34.6803 0.499815 31.0568C0.469485 27.7079 1.31144 24.4089 2.94273 21.4847C3.07155 21.2637 3.20037 21.0243 3.33378 20.8217C3.4672 20.6192 3.66963 20.2877 3.84445 20.0344C4.01927 19.7812 4.2033 19.5234 4.38732 19.2793C4.94597 18.549 5.56129 17.864 6.22756 17.2305C6.62781 16.8714 7.03726 16.5306 7.46052 16.213L7.89297 15.9045C8.26102 15.642 8.63367 15.3888 9.02012 15.1586C9.20875 15.0435 9.40657 14.9284 9.6044 14.8271C9.80222 14.7258 9.99545 14.6153 10.1979 14.514C10.0691 14.689 9.93564 14.8639 9.81142 15.0389C9.39737 15.596 9.00632 16.1577 8.65207 16.7286C8.29783 17.2995 7.92978 17.8889 7.59854 18.492C7.60027 18.5058 7.60027 18.5197 7.59854 18.5335C7.48812 18.7314 7.38231 18.9294 7.2857 19.1274C7.18908 19.3254 7.07407 19.5372 6.97286 19.7444C6.87164 19.9515 6.77043 20.1633 6.67382 20.3751C4.02387 25.4397 3.12216 33.2668 7.86077 37.1113C7.93898 37.1712 8.03099 37.231 8.13681 37.3001C9.89884 38.4603 12.1761 38.6537 14.3246 38.092C16.5102 37.4416 18.4601 36.17 19.9373 34.4317L20.0294 34.335C22.7253 31.3054 24.5011 27.0926 25.5501 23.5382C26.3667 20.5517 26.9542 17.5072 27.3075 14.4311L22.0858 14.3851L41.5417 0.158203Z" fill="white" />
                                    <path d="M39.4072 48.0004V16.3099H46.1793V19.3118C46.8602 17.309 49.5423 15.9001 52.9928 15.9001C54.5101 15.8602 56.0181 16.1485 57.414 16.7453C58.8098 17.342 60.0605 18.2331 61.0806 19.3579C62.1551 20.4735 62.9975 21.7915 63.5591 23.2355C64.1206 24.6795 64.39 26.2207 64.3517 27.7697C64.4205 30.9107 63.2445 33.9513 61.0806 36.2276C60.0489 37.338 58.7929 38.216 57.3961 38.8034C55.9993 39.3909 54.4936 39.6742 52.979 39.6346C49.5285 39.6346 46.8464 38.2258 46.1655 36.2276V48.0004H39.4072ZM55.9004 31.8858C56.4478 31.352 56.8795 30.711 57.1684 30.0028C57.4574 29.2946 57.5973 28.5344 57.5796 27.7697C57.5981 27.0147 57.4577 26.2642 57.1677 25.567C56.8776 24.8698 56.4442 24.2414 55.8958 23.7226C55.3585 23.1721 54.7134 22.7387 54.0009 22.4495C53.2884 22.1604 52.5238 22.0216 51.7552 22.0421C50.9675 22.0223 50.1838 22.1609 49.4504 22.4495C48.7171 22.7382 48.0491 23.1711 47.4859 23.7226C46.9317 24.2391 46.4919 24.8661 46.1948 25.5632C45.8976 26.2603 45.7497 27.0119 45.7607 27.7697C45.7545 28.5336 45.9043 29.2907 46.201 29.9945C46.4977 30.6983 46.9349 31.3341 47.4859 31.8628C48.6405 32.9531 50.1773 33.5452 51.7644 33.5111C52.5289 33.5268 53.2887 33.389 53.9991 33.1059C54.7095 32.8228 55.356 32.4001 55.9004 31.8628V31.8858Z" fill="white" />
                                    <path d="M82.9795 19.3107V7.5332H89.7516V39.2237H82.9795V36.2264C82.2986 38.2246 79.6165 39.6335 76.166 39.6335C74.6475 39.6668 73.1389 39.3808 71.7378 38.7939C70.3366 38.207 69.0742 37.3323 68.0322 36.2264C65.9016 33.9328 64.7466 30.8995 64.8117 27.7686C64.7385 24.65 65.8955 21.628 68.0322 19.3567C69.0643 18.2346 70.3237 17.3458 71.7263 16.7496C73.1289 16.1533 74.6425 15.8633 76.166 15.899C79.6165 15.899 82.2986 17.3079 82.9795 19.3107ZM81.5993 31.8617C82.1649 31.3419 82.6148 30.7088 82.92 30.0037C83.2251 29.2985 83.3786 28.537 83.3706 27.7686C83.3833 27.0062 83.2317 26.2501 82.9261 25.5517C82.6204 24.8533 82.1679 24.229 81.5993 23.7215C81.047 23.1668 80.3868 22.7314 79.6595 22.4424C78.9323 22.1533 78.1535 22.0167 77.3714 22.041C76.6028 22.0205 75.8382 22.1592 75.1257 22.4484C74.4132 22.7376 73.7681 23.171 73.2308 23.7215C72.6824 24.2402 72.249 24.8686 71.959 25.5658C71.6689 26.2631 71.5285 27.0135 71.547 27.7686C71.5331 28.5298 71.6753 29.2858 71.9649 29.9898C72.2545 30.6938 72.6854 31.3309 73.2308 31.8617C73.7769 32.397 74.4247 32.8175 75.1358 33.0982C75.847 33.379 76.6071 33.5143 77.3714 33.4961C78.1523 33.5204 78.9301 33.3884 79.6593 33.1077C80.3885 32.827 81.0544 32.4034 81.6177 31.8617H81.5993Z" fill="white" />
                                    <path d="M112.147 19.1728C113.35 20.2529 114.305 21.5801 114.948 23.0636C115.592 24.5471 115.907 26.152 115.874 27.7688C115.903 29.391 115.586 31.0007 114.943 32.4903C114.3 33.9799 113.347 35.315 112.147 36.4062C109.722 38.7057 106.494 39.9634 103.153 39.91C99.7974 39.973 96.551 38.7148 94.113 36.4062C92.9274 35.3062 91.9868 33.9684 91.3526 32.4801C90.7185 30.9919 90.4049 29.3865 90.4325 27.7688C90.4003 26.1565 90.7119 24.5558 91.3465 23.0736C91.9812 21.5913 92.9243 20.2615 94.113 19.1728C95.3126 18.0156 96.7287 17.1068 98.28 16.4984C99.8313 15.8901 101.487 15.5941 103.153 15.6275C106.502 15.5698 109.737 16.8449 112.147 19.1728ZM98.9252 32.0645C99.4749 32.6257 100.134 33.0684 100.861 33.3653C101.588 33.6623 102.368 33.8071 103.153 33.791C103.938 33.8065 104.717 33.6613 105.443 33.3644C106.169 33.0675 106.827 32.6251 107.377 32.0645C107.938 31.5009 108.38 30.8302 108.677 30.0923C108.974 29.3544 109.12 28.5642 109.106 27.7688C109.122 26.983 108.978 26.2023 108.681 25.4746C108.384 24.7469 107.942 24.0877 107.381 23.5375C106.84 22.9627 106.185 22.5079 105.457 22.2025C104.73 21.8972 103.946 21.7481 103.158 21.7649C102.368 21.7477 101.584 21.8966 100.856 22.202C100.127 22.5073 99.4713 22.9623 98.9298 23.5375C98.369 24.0877 97.9266 24.7469 97.6299 25.4746C97.3332 26.2023 97.1885 26.983 97.2046 27.7688C97.1882 28.5603 97.3321 29.347 97.6279 30.0814C97.9236 30.8157 98.3649 31.4825 98.9252 32.0414V32.0645Z" fill="white" />
                                    <path d="M116.872 39.2247V16.3098H123.644V19.1735C124.596 17.1753 127.187 15.8125 130.32 15.8125C135.909 15.8125 139.088 19.3577 139.088 25.3155V39.2247H132.321V26.1443C132.321 23.4646 130.821 21.8256 128.139 21.8256C127.539 21.8053 126.941 21.9094 126.383 22.1315C125.825 22.3536 125.319 22.6888 124.897 23.1161C124.475 23.5433 124.146 24.0534 123.93 24.6141C123.715 25.1749 123.617 25.7742 123.644 26.3745V39.2385L116.872 39.2247Z" fill="white" />
                                    <path d="M139.93 27.7238C139.93 24.1325 141.113 21.2227 143.431 19.0403C145.75 16.8579 148.745 15.7207 152.333 15.7207C155.834 15.7207 158.65 16.8579 160.831 19.0864C161.908 20.174 162.754 21.4695 163.316 22.8941C163.879 24.3187 164.146 25.8428 164.102 27.3739C164.102 28.1474 164.056 28.8748 164.01 29.5562H146.679C146.813 32.2819 149.177 34.0591 152.766 34.0591C154.851 34.0869 156.861 33.2854 158.356 31.8307L162.308 35.6015C161.046 36.9473 159.517 38.0147 157.819 38.7354C156.122 39.4561 154.292 39.8142 152.448 39.7867C148.676 39.7867 145.676 38.6955 143.362 36.5638C141.048 34.4321 139.93 31.4992 139.93 27.9033V27.7238ZM157.288 25.1316C157.288 22.9953 155.062 21.3148 152.333 21.3148C149.38 21.3148 146.974 22.9953 146.79 25.1316H157.288Z" fill="white" />
                                    <path d="M20.0296 34.3348C17.0944 38.7502 12.7836 40.8773 8.35324 39.7953C3.3938 38.6029 1.1165 35.3983 0.532224 31.0474C0.501894 27.6985 1.34385 24.3995 2.97514 21.4753C3.10396 21.2543 3.23278 21.0149 3.36619 20.8123C3.49961 20.6097 3.70204 20.2782 3.87686 20.025C4.05168 19.7718 4.23571 19.5139 4.41973 19.2699C4.97838 18.5396 5.5937 17.8546 6.25997 17.2211C6.66022 16.8619 7.06967 16.5212 7.49293 16.2035L7.92539 15.8951C8.29343 15.6326 8.67528 15.3794 9.05713 15.1446C9.24576 15.0295 9.44358 14.9144 9.64141 14.8131C9.83923 14.7118 10.0325 14.6013 10.2349 14.5C10.1061 14.675 9.97265 14.8499 9.84844 15.0249L9.45278 15.5544C9.18135 15.9365 8.91912 16.3233 8.66608 16.7192C8.29803 17.2947 7.94839 17.8795 7.61255 18.4826C7.61428 18.4964 7.61428 18.5103 7.61255 18.524C7.50673 18.722 7.39632 18.92 7.2997 19.118C7.20309 19.316 7.08808 19.5278 6.98686 19.7349C6.88565 19.9421 6.78444 20.1539 6.68782 20.3657C4.03788 25.4303 3.13616 33.2574 7.87478 37.1019C7.95299 37.1617 8.045 37.2216 8.15082 37.2907C9.91284 38.4509 12.1901 38.6443 14.3386 38.0826C16.5181 37.4323 18.4628 36.1642 19.9375 34.4315L20.0296 34.3348Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_910_973">
                                        <rect width="163.579" height="47.842" fill="white" transform="translate(0.5 0.158203)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className="text-subheading-3">
                                Our vision is to provide convenience and help increase <br /> your sales business.
                            </h5>
                            <div className="flex relative right-[18px]">
                                <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1889_760)">
                                        <circle cx="34.8369" cy="22.6671" r="16.7999" fill="#2C2240" />
                                    </g>
                                    <path d="M34.8369 5.86719C25.5584 5.86719 18.0369 13.3887 18.0369 22.6672C18.0369 31.9457 25.5584 39.4672 34.8369 39.4672C44.1154 39.4672 51.6369 31.9457 51.6369 22.6672C51.6369 13.3887 44.1154 5.86719 34.8369 5.86719ZM38.8164 17.4767H36.2911C35.9919 17.4767 35.6594 17.8704 35.6594 18.3937V20.2172H38.8181L38.3404 22.8177H35.6594V30.6244H32.6791V22.8177H29.9754V20.2172H32.6791V18.6877C32.6791 16.4932 34.2016 14.7099 36.2911 14.7099H38.8164V17.4767Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1889_760" x="0.0369873" y="0.867188" width="69.5999" height="69.6016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="13" />
                                            <feGaussianBlur stdDeviation="9" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1889_760" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1889_760" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1889_761)">
                                        <circle cx="35.437" cy="22.6671" r="16.7999" fill="#2C2240" />
                                    </g>
                                    <path d="M35.437 5.86719C26.1585 5.86719 18.637 13.3887 18.637 22.6672C18.637 31.9457 26.1585 39.4672 35.437 39.4672C44.7155 39.4672 52.237 31.9457 52.237 22.6672C52.237 13.3887 44.7155 5.86719 35.437 5.86719ZM42.2707 19.6292C42.2777 19.7727 42.2795 19.9162 42.2795 20.0562C42.2795 24.4312 38.9527 29.4729 32.8662 29.4729C31.0677 29.4759 29.3067 28.9594 27.7947 27.9854C28.052 28.0169 28.3162 28.0292 28.584 28.0292C30.1345 28.0292 31.5607 27.5024 32.693 26.6134C32.003 26.5999 31.3344 26.3714 30.7804 25.9598C30.2264 25.5483 29.8147 24.9741 29.6025 24.3174C30.098 24.4117 30.6085 24.3919 31.0952 24.2597C30.3463 24.1082 29.6728 23.7024 29.189 23.1111C28.7051 22.5198 28.4407 21.7793 28.4405 21.0152V20.9749C28.8867 21.2217 29.3977 21.3722 29.9402 21.3897C29.2381 20.9223 28.7411 20.2044 28.5508 19.3827C28.3605 18.561 28.4913 17.6976 28.9165 16.9692C29.7476 17.9912 30.7842 18.8272 31.959 19.4232C33.1337 20.0192 34.4206 20.3618 35.7362 20.4289C35.569 19.719 35.6409 18.9736 35.941 18.3088C36.241 17.644 36.7523 17.0969 37.3953 16.7527C38.0384 16.4084 38.7771 16.2862 39.4968 16.4051C40.2164 16.524 40.8766 16.8774 41.3747 17.4102C42.1153 17.2637 42.8254 16.992 43.4747 16.6069C43.2279 17.3737 42.7111 18.0247 42.0205 18.4392C42.6764 18.3602 43.317 18.1838 43.921 17.9159C43.4773 18.5808 42.9185 19.161 42.2707 19.6292Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1889_761" x="0.637085" y="0.867188" width="69.5999" height="69.6016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="13" />
                                            <feGaussianBlur stdDeviation="9" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1889_761" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1889_761" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                                <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1889_762)">
                                        <circle cx="35.0371" cy="22.6671" r="16.7999" fill="#2C2240" />
                                    </g>
                                    <path d="M40.2871 22.6672C40.2871 24.0596 39.7339 25.3949 38.7494 26.3795C37.7648 27.3641 36.4295 27.9172 35.0371 27.9172C33.6447 27.9172 32.3093 27.3641 31.3248 26.3795C30.3402 25.3949 29.7871 24.0596 29.7871 22.6672C29.7871 22.3679 29.8186 22.0757 29.8728 21.7922H28.0371V28.7869C28.0371 29.2734 28.4308 29.6672 28.9173 29.6672H41.1586C41.3917 29.6667 41.6152 29.5738 41.7799 29.4088C41.9446 29.2437 42.0371 29.0201 42.0371 28.7869V21.7922H40.2013C40.2556 22.0757 40.2871 22.3679 40.2871 22.6672ZM35.0371 26.1672C35.4968 26.1671 35.952 26.0764 36.3767 25.9004C36.8014 25.7243 37.1873 25.4664 37.5123 25.1412C37.8373 24.816 38.0951 24.43 38.2709 24.0052C38.4467 23.5804 38.5372 23.1252 38.5371 22.6654C38.5369 22.2057 38.4463 21.7505 38.2702 21.3258C38.0942 20.9011 37.8362 20.5152 37.5111 20.1902C37.1859 19.8652 36.7999 19.6074 36.3751 19.4316C35.9503 19.2558 35.4951 19.1653 35.0353 19.1654C34.1068 19.1657 33.2165 19.5347 32.5601 20.1914C31.9037 20.8481 31.5351 21.7387 31.5353 22.6672C31.5355 23.5957 31.9046 24.486 32.5613 25.1424C33.218 25.7988 34.1086 26.1674 35.0371 26.1672ZM39.2371 18.9922H41.3353C41.4747 18.9922 41.6084 18.9369 41.7072 18.8385C41.8059 18.7401 41.8616 18.6066 41.8621 18.4672V16.3689C41.8621 16.2292 41.8066 16.0953 41.7078 15.9965C41.609 15.8977 41.475 15.8422 41.3353 15.8422H39.2371C39.0974 15.8422 38.9634 15.8977 38.8646 15.9965C38.7658 16.0953 38.7103 16.2292 38.7103 16.3689V18.4672C38.7121 18.7559 38.9483 18.9922 39.2371 18.9922ZM35.0371 5.86719C30.5814 5.86719 26.3083 7.63718 23.1577 10.7878C20.0071 13.9384 18.2371 18.2116 18.2371 22.6672C18.2371 27.1228 20.0071 31.396 23.1577 34.5466C26.3083 37.6972 30.5814 39.4672 35.0371 39.4672C37.2433 39.4672 39.4279 39.0326 41.4661 38.1884C43.5044 37.3441 45.3564 36.1066 46.9165 34.5466C48.4765 32.9866 49.714 31.1345 50.5582 29.0963C51.4025 27.058 51.8371 24.8734 51.8371 22.6672C51.8371 20.461 51.4025 18.2764 50.5582 16.2381C49.714 14.1998 48.4765 12.3478 46.9165 10.7878C45.3564 9.22777 43.5044 7.99029 41.4661 7.14601C39.4279 6.30173 37.2433 5.86719 35.0371 5.86719ZM43.7871 29.4729C43.7871 30.5422 42.9121 31.4172 41.8428 31.4172H28.2313C27.1621 31.4172 26.2871 30.5422 26.2871 29.4729V15.8614C26.2871 14.7922 27.1621 13.9172 28.2313 13.9172H41.8428C42.9121 13.9172 43.7871 14.7922 43.7871 15.8614V29.4729Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1889_762" x="0.237183" y="0.867188" width="69.5999" height="69.6016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="13" />
                                            <feGaussianBlur stdDeviation="9" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1889_762" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1889_762" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6 ">
                                <div className="w-full lg:w-4/12 space-y-4 px-4 ml-auto">
                                    <span className="font-[600] block capitalize text-[24px] mb-2">About</span>
                                    <ul className="list-unstyled space-y-4 text-paragraph">
                                        <li>
                                            <a className="  block pb-2" href="https://www.creative-tim.com/presentation?ref=njs-profile">How it works</a>
                                        </li>
                                        <li>
                                            <a className="  block pb-2" href="https://blog.creative-tim.com?ref=njs-profile">Featured</a>
                                        </li>
                                        <li>
                                            <a className="  block pb-2" href="https://www.github.com/creativetimofficial?ref=njs-profile">Partnership</a>
                                        </li>
                                        <li>
                                            <a className="  block pb-2" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Refund Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 space-y-4">
                                    <span className="font-[600] block capitalize text-[24px] mb-2">Listings</span>
                                    <ul className="list-unstyled space-y-4">
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Worker list</a>
                                        </li>
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Payment</a>
                                        </li>
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Blogs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 space-y-4">
                                    <span className="font-[600] block capitalize text-[24px] mb-2">Socials</span>
                                    <ul className="list-unstyled space-y-4">
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Discord</a>
                                        </li>
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Instagram</a>
                                        </li>
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Twitter</a>
                                        </li>
                                        <li>
                                            <a className=" block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Facebook</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px] mx-20'>
                        <hr className="my-6 border-[.5px] border-[#807a8c]" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full px-4 text-center mx-[74px]">
                                <div className="text-paragraph py-1 flex justify-between items-center">
                                    <div>
                                        Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" className=" hover:text-gray-800" target="_blank"> Updone . All rights reserved
                                        </a>.
                                    </div>
                                    <div className="flex items-center justify-center gap-10">
                                        <div>
                                            <a href="https://www.creative-tim.com/product/notus-js" className=" hover:text-gray-800" target="_blank"> Privacy & Policy
                                            </a>.
                                        </div>
                                        <div>
                                            Terms & Condition<a href="https://www.creative-tim.com/product/notus-js" className=" hover:text-gray-800" target="_blank">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </div>

    )
}

export default React.memo(Footer)
