import { useEffect, useState } from "react";
import "./App.scss";

function App() {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="general">
         {/* Шапка */}
         <header className="general__header header" id="header">
            <div className="header__wrapper">
               <div className="header__container container">
                  <div className="header__logo">
                     <svg
                        width="106"
                        height="37"
                        viewBox="0 0 106 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M90.8041 5.38873C87.8967 5.38854 85.0553 6.13537 82.6382 7.53479C80.221 8.93421 78.337 10.9234 77.2244 13.2507C76.1118 15.578 75.8205 18.139 76.3875 20.6097C76.9545 23.0805 78.3542 25.3501 80.4097 27.1315C82.4651 28.9128 85.084 30.126 87.9356 30.6175C90.7858 31.109 93.7414 30.8569 96.4276 29.893C99.1128 28.9289 101.408 27.2964 103.023 25.2018C104.639 23.1072 105.501 20.6447 105.501 18.1255C105.496 14.7489 103.947 11.5117 101.192 9.12397C98.4366 6.73623 94.7006 5.39294 90.8041 5.38873ZM90.8041 25.9593C89.0163 25.9595 87.2687 25.5002 85.7816 24.6395C84.2948 23.7789 83.136 22.5555 82.4516 21.1241C81.7672 19.6927 81.5881 18.1175 81.9367 16.5978C82.2854 15.0782 83.1463 13.6823 84.4105 12.5866C85.6747 11.4909 87.2858 10.7447 89.0393 10.4424C90.7927 10.14 92.6103 10.2951 94.2617 10.888C95.9142 11.4809 97.3261 12.485 98.3197 13.7733C99.3122 15.0616 99.8428 16.5762 99.8428 18.1255C99.8394 20.2021 98.8859 22.1926 97.1909 23.661C95.4971 25.1294 93.2005 25.9559 90.8041 25.9593ZM57.157 5.38873C54.25 5.38873 51.4083 6.13574 48.9913 7.53528C46.5743 8.93482 44.6904 10.924 43.578 13.2514C42.4655 15.5788 42.1746 18.1396 42.7416 20.6103C43.3088 23.081 44.7085 25.3505 46.764 27.1318C48.8195 28.9131 51.4384 30.1261 54.2895 30.6176C57.1406 31.109 60.0958 30.8569 62.7815 29.8929C65.4672 28.9288 67.7626 27.2963 69.3777 25.2017C70.9926 23.1071 71.8547 20.6446 71.8547 18.1255C71.8501 14.7487 70.3001 11.5114 67.5447 9.12362C64.7893 6.73586 61.0537 5.39268 57.157 5.38873ZM57.157 25.9593C55.4911 25.96 53.8576 25.5619 52.4364 24.8088C51.0153 24.0557 49.8619 22.977 49.1035 21.6917C48.3453 20.4064 48.0115 18.9645 48.1392 17.5253C48.2668 16.086 48.8508 14.7052 49.8269 13.5354C50.803 12.3657 52.133 11.4524 53.6702 10.8963C55.2075 10.3402 56.8921 10.1631 58.5381 10.3844C60.1843 10.6057 61.7277 11.2168 62.9983 12.1503C64.2689 13.0839 65.2172 14.3035 65.7384 15.6745H57.157V20.5766H65.7384C65.1414 22.141 63.9913 23.503 62.4509 24.4691C60.9106 25.4353 59.0584 25.9566 57.157 25.9593Z"
                           fill="#FF70D9"
                        />
                        <path
                           d="M33.1773 28.9802C32.5152 28.0944 31.5358 27.4133 30.1145 27.6354C26.8292 28.1487 28.5745 25.582 26.2132 26.6087C24.3241 27.4301 22.9621 29.7572 22.5172 30.8181C22.3803 30.1678 21.8601 28.7442 20.8745 28.2514C19.6425 27.6354 19.2318 28.6621 18.5131 27.6354C17.7945 26.6087 17.7945 25.1714 17.1785 23.734C16.5625 22.2967 19.2318 20.1407 20.8745 20.962C22.5172 21.7834 23.5438 21.27 24.3652 22.502C25.1865 23.734 26.2132 25.274 26.2132 20.962C26.2132 16.65 28.2665 14.6993 29.1905 14.802C30.1145 14.9047 32.9892 13.8778 32.4759 12.8513C31.9625 11.8249 29.1905 11.3113 29.1905 10.3873C29.1905 9.46332 30.4225 7.51289 29.1905 6.58889C27.9585 5.66489 24.8785 3.81688 22.5172 4.02221C20.1558 4.22755 19.4283 5.15216 19.4283 5.97349C19.4283 6.79483 22.5172 8.33507 20.8745 9.36119C19.2318 10.3873 13.8931 12.0295 13.8931 10.3873C13.8931 8.74519 13.5851 5.25451 14.6118 5.25451C15.6385 5.25451 15.9465 2.68784 16.5625 2.79051C17.1785 2.89317 19.7452 1.76449 20.8745 2.2775C21.2207 2.43478 22.3583 2.13856 23.6392 1.60479M33.1773 28.9802C35.3333 26.0648 36.608 22.4581 36.608 18.5537C36.608 10.4452 31.1104 3.62088 23.6392 1.60479M33.1773 28.9802C29.98 33.3038 24.8446 36.1073 19.0544 36.1073C18.0235 36.1073 17.0135 36.0185 16.0314 35.848M16.0314 35.848C16.164 35.0843 16.3376 34.4532 16.5625 34.1034C17.4865 32.6661 20.5665 33.6927 20.8745 32.9741C21.1825 32.2554 19.8478 31.4341 18.5131 30.8181C17.1785 30.2021 14.9198 29.5861 14.6118 26.6087C14.3038 23.6314 12.8665 24.1447 12.5585 23.734C12.2505 23.3234 8.65711 22.194 7.52746 20.1407C6.39781 18.0874 7.52777 14.5967 7.52746 13.6727C7.52724 13.0195 4.69508 12.3184 2.7846 11.9516M16.0314 35.848C7.7773 34.4152 1.50073 27.2174 1.50073 18.5537C1.50073 16.2184 1.95675 13.9896 2.7846 11.9516M2.7846 11.9516C5.39347 5.52883 11.695 1 19.0544 1C20.6406 1 22.1777 1.21039 23.6392 1.60479"
                           stroke="#FF70D9"
                           strokeWidth="1.5"
                           strokeLinecap="square"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>

                  {isMobile ? (
                     <>
                        <div className="box-line__general">
                           <ul className="box-line" onClick={handleClick}>
                              <li
                                 className={`line-one ${
                                    isOpen ? "line-one__active" : ""
                                 }`}
                              ></li>
                              <li
                                 className={`line-two ${
                                    isOpen ? "line-two__none" : ""
                                 }`}
                              ></li>
                              <li
                                 className={`line-three ${
                                    isOpen ? "line-three__active" : ""
                                 }`}
                              ></li>
                           </ul>
                        </div>

                        <div className={`slide-menu ${isOpen ? "open" : ""}`}>
                           <nav className="mobile-nav">
                              <ul className="mobile-menu">
                                 <li
                                    className="mobile-item"
                                    onClick={handleClick}
                                 >
                                    Home
                                 </li>
                                 <li
                                    className="mobile-item"
                                    onClick={handleClick}
                                 >
                                    Products
                                 </li>
                                 <li
                                    className="mobile-cart"
                                    onClick={handleClick}
                                 >
                                    <svg
                                       width="24"
                                       height="21"
                                       viewBox="0 0 24 21"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M9.23358 18.5641C9.23358 17.5679 8.41124 16.7682 7.38685 16.7682C6.36248 16.7682 5.54012 17.5679 5.54012 18.5641C5.54012 19.5603 6.36248 20.36 7.38685 20.36C8.41124 20.36 9.23358 19.5603 9.23358 18.5641ZM22.1607 18.5641C22.1607 17.5679 21.3383 16.7682 20.3139 16.7682C19.2895 16.7682 18.4672 17.5679 18.4672 18.5641C18.4672 19.5603 19.2895 20.36 20.3139 20.36C21.3383 20.36 22.1607 19.5603 22.1607 18.5641ZM24.0074 3.30052C24.0074 2.80935 23.589 2.40269 23.084 2.40269H5.75655C5.61231 1.72922 5.59781 0.606934 4.6168 0.606934H0.923317C0.418371 0.606934 0 1.01381 0 1.50463C0 1.99579 0.418371 2.40269 0.923317 2.40269H3.86656L6.42024 13.9487C6.21824 14.3552 5.54012 15.4357 5.54012 15.8705C5.54012 16.3617 5.95851 16.7682 6.46353 16.7682H21.2373C21.7423 16.7682 22.1607 16.3617 22.1607 15.8705C22.1607 15.3797 21.7423 14.9727 21.2373 14.9727H7.96399C8.10823 14.692 8.31026 14.3974 8.31026 14.075C8.31026 13.7521 8.18035 13.4017 8.12266 13.0927L23.185 11.3814C23.6611 11.3251 24.0074 10.9323 24.0074 10.4832V3.30052Z"
                                          fill="white"
                                       />
                                    </svg>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </>
                  ) : (
                     <nav className="header__nav">
                        <ul className="header__menu">
                           <li className="header__item">Home</li>
                           <li className="header__item">Products</li>
                           <li className="header__cart">
                              <svg
                                 width="24"
                                 height="21"
                                 viewBox="0 0 24 21"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.23358 18.5641C9.23358 17.5679 8.41124 16.7682 7.38685 16.7682C6.36248 16.7682 5.54012 17.5679 5.54012 18.5641C5.54012 19.5603 6.36248 20.36 7.38685 20.36C8.41124 20.36 9.23358 19.5603 9.23358 18.5641ZM22.1607 18.5641C22.1607 17.5679 21.3383 16.7682 20.3139 16.7682C19.2895 16.7682 18.4672 17.5679 18.4672 18.5641C18.4672 19.5603 19.2895 20.36 20.3139 20.36C21.3383 20.36 22.1607 19.5603 22.1607 18.5641ZM24.0074 3.30052C24.0074 2.80935 23.589 2.40269 23.084 2.40269H5.75655C5.61231 1.72922 5.59781 0.606934 4.6168 0.606934H0.923317C0.418371 0.606934 0 1.01381 0 1.50463C0 1.99579 0.418371 2.40269 0.923317 2.40269H3.86656L6.42024 13.9487C6.21824 14.3552 5.54012 15.4357 5.54012 15.8705C5.54012 16.3617 5.95851 16.7682 6.46353 16.7682H21.2373C21.7423 16.7682 22.1607 16.3617 22.1607 15.8705C22.1607 15.3797 21.7423 14.9727 21.2373 14.9727H7.96399C8.10823 14.692 8.31026 14.3974 8.31026 14.075C8.31026 13.7521 8.18035 13.4017 8.12266 13.0927L23.185 11.3814C23.6611 11.3251 24.0074 10.9323 24.0074 10.4832V3.30052Z"
                                    fill="white"
                                 />
                              </svg>
                           </li>
                        </ul>
                     </nav>
                  )}
               </div>
            </div>
         </header>

         {/*promo-блок */}
         <section className="promo" id="promo">
            <div className="promo__container container">
               <div className="promo__content">
                  <p className="promo__title">
                     Discover the vast expanses of
                     <span className="promo__highlight">space</span>
                  </p>
                  <p className="promo__text">
                     Where the possibilities are
                     <span className="promo__highlight promo__highlight-bg">
                        endless!
                     </span>
                  </p>
                  <button className="promo__button">Learn more</button>
               </div>

               <figure className="promo__image">
                  <img
                     src={`${process.env.PUBLIC_URL}/orbiting.png`}
                     alt="rocket-orbiting-earth"
                     className="promo__image-img"
                  />
               </figure>
            </div>
         </section>

         {/* offers */}
         <main className="general__main">
            <div className="main__container container">
               <h2 className="main__title">Offers</h2>

               <div className="offers">
                  <div className="offers__block offers__block--one">
                     <p className="offers__title">
                        Move the borders of reality!
                     </p>
                     <p className="offers__text">
                        Go on a space adventure - it's possible with us!
                     </p>
                     <button className="offers__button">Learn more</button>
                  </div>

                  <div className="offers__block offers__block--two">
                     <p className="offers__title offers__title-size">
                        Space is not just stars and planets
                     </p>
                     <p className="offers__text offers__text-size">
                        Go on a space adventure
                     </p>
                     <button className="offers__button">Learn more</button>
                  </div>

                  <div className="offers__block offers__block--three">
                     <p className="offers__title offers__title-size">
                        For those who dream of stars
                     </p>
                     <p className="offers__text offers__text-size">
                        Our offer: make your dream come true
                     </p>
                     <button className="offers__button">Learn more</button>
                  </div>

                  <div className="offers__block offers__block--four">
                     <p className="offers__title">
                        Fulfill your fantastic dreams
                     </p>
                     <p className="offers__text">
                        Space has never been so close
                     </p>
                     <button className="offers__button">Learn more</button>
                  </div>
               </div>
            </div>
         </main>

         {/* spaceJourney-блок */}
         <section className="spaceJourney container">
            <div className="spaceJourney__container">
               <h2 className="spaceJourney__title">
                  Embark on a space journey
               </h2>

               <input
                  type="checkbox"
                  id="toggle"
                  className="spaceJourney__checkbox"
               />

               <p className="spaceJourney__text">
                  Travelling into space is one of the most exciting and
                  unforgettable adventures that can change your life forever.
                  And if you have ever dreamed of exploring stars, planets and
                  galaxies, then our company is ready to help you realize this
                  dream. We offer a unique experience that will allow you to go
                  on a space journey and see all the secrets of the universe. We
                  guarantee that every moment in space will be filled with
                  incredible impressions, excitement and new discoveries. Our
                  team of professionals takes care of your safety and comfort so
                  that you can fully enjoy your adventure in space. We offer
                  various options for space excursions.
                  <span className="spaceJourney__more">
                     Travelling into space is one of the most exciting and
                     unforgettable adventures that can change your life forever.
                     And if you have ever dreamed of exploring stars, planets
                     and galaxies, then our company is ready to help you realize
                     this dream. We offer a unique experience that will allow
                     you to go on a space journey and see all the secrets of the
                     universe. We guarantee that every moment in space will be
                     filled with incredible impressions, excitement
                  </span>
               </p>

               <label htmlFor="toggle" className="spaceJourney__link"></label>
            </div>
         </section>

         {/* footer-блок */}
         <footer className="general__footer footer">
            <div className="footer__container container">
               <figure>
                  <img
                     src={`${process.env.PUBLIC_URL}/rocket.png`}
                     alt="rocket"
                  />
               </figure>
               <p className="footer__text">Exciting space adventure!</p>
            </div>
         </footer>
      </div>
   );
}

export default App;
