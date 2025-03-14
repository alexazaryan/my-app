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
                        width="73"
                        height="26"
                        viewBox="0 0 73 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M62.0494 3.91379C60.0619 3.91366 58.1195 4.42278 56.467 5.37678C54.8146 6.33078 53.5267 7.6868 52.7661 9.27336C52.0055 10.8599 51.8064 12.6058 52.194 14.2901C52.5816 15.9745 53.5385 17.5217 54.9436 18.736C56.3487 19.9504 58.1391 20.7775 60.0885 21.1125C62.0369 21.4476 64.0574 21.2757 65.8938 20.6186C67.7294 19.9614 69.2986 18.8485 70.4025 17.4206C71.5072 15.9927 72.0963 14.3139 72.0963 12.5966C72.0932 10.2947 71.034 8.08787 69.1506 6.46013C67.2672 4.83239 64.7132 3.91666 62.0494 3.91379ZM62.0494 17.9369C60.8273 17.9371 59.6325 17.6239 58.6159 17.0372C57.5996 16.4505 56.8074 15.6165 56.3395 14.6407C55.8716 13.6649 55.7492 12.5911 55.9875 11.5551C56.2259 10.5192 56.8144 9.5676 57.6786 8.82064C58.5429 8.07371 59.6443 7.56502 60.843 7.35891C62.0416 7.15279 63.2842 7.25851 64.4131 7.66269C65.5428 8.06687 66.508 8.75135 67.1872 9.62961C67.8657 10.5078 68.2284 11.5404 68.2284 12.5966C68.2261 14.0122 67.5743 15.3691 66.4156 16.3702C65.2576 17.3712 63.6876 17.9346 62.0494 17.9369ZM39.0476 3.91379C37.0604 3.91379 35.1177 4.42303 33.4655 5.37711C31.8131 6.33119 30.5253 7.68726 29.7648 9.27384C29.0043 10.8604 28.8054 12.6062 29.1931 14.2905C29.5808 15.9748 30.5377 17.5219 31.9428 18.7362C33.348 19.9506 35.1383 20.7775 37.0874 21.1126C39.0364 21.4476 41.0567 21.2757 42.8927 20.6185C44.7287 19.9613 46.2978 18.8484 47.4019 17.4205C48.506 15.9926 49.0953 14.3139 49.0953 12.5966C49.0921 10.2946 48.0325 8.08765 46.1489 6.4599C44.2653 4.83213 41.7115 3.91648 39.0476 3.91379ZM39.0476 17.9369C37.9088 17.9374 36.7921 17.666 35.8206 17.1526C34.8491 16.6392 34.0606 15.9039 33.5422 15.0277C33.0238 14.1515 32.7956 13.1685 32.8829 12.1874C32.9702 11.2062 33.3694 10.2649 34.0367 9.46746C34.7039 8.67004 35.6132 8.04742 36.664 7.66835C37.7149 7.28928 38.8666 7.16852 39.9918 7.31937C41.1172 7.47023 42.1723 7.88684 43.0409 8.52324C43.9095 9.15962 44.5577 9.99107 44.914 10.9257H39.0476V14.2675H44.914C44.5059 15.334 43.7197 16.2625 42.6667 16.9211C41.6137 17.5797 40.3475 17.9351 39.0476 17.9369Z"
                           fill="#FF70D9"
                        />
                        <path
                           d="M22.6547 20.1278C22.2021 19.5222 21.5326 19.0566 20.5609 19.2084C18.315 19.5594 19.5081 17.8047 17.8939 18.5066C16.6025 19.0681 15.6713 20.6589 15.3672 21.3842C15.2736 20.9397 14.918 19.9664 14.2443 19.6295C13.402 19.2084 13.1213 19.9103 12.63 19.2084C12.1387 18.5066 12.1387 17.524 11.7176 16.5414C11.2965 15.5588 13.1213 14.0849 14.2443 14.6464C15.3672 15.2079 16.0691 14.857 16.6305 15.6992C17.192 16.5414 17.8939 17.5942 17.8939 14.6464C17.8939 11.6986 19.2976 10.3651 19.9292 10.4353C20.5609 10.5055 22.5261 9.80349 22.1752 9.10179C21.8242 8.40009 19.9292 8.04901 19.9292 7.41735C19.9292 6.78568 20.7715 5.45233 19.9292 4.82067C19.087 4.189 16.9815 2.92567 15.3672 3.06604C13.753 3.20641 13.2556 3.83849 13.2556 4.39997C13.2556 4.96145 15.3672 6.01439 14.2443 6.71587C13.1213 7.41735 9.47167 8.53994 9.47167 7.41735C9.47167 6.29475 9.26112 3.90846 9.96297 3.90846C10.6648 3.90846 10.8754 2.15384 11.2965 2.22402C11.7176 2.29421 13.4722 1.52262 14.2443 1.87332C14.4809 1.98084 15.2586 1.77834 16.1343 1.41344M22.6547 20.1278C24.1286 18.1347 25 15.6691 25 13C25 7.45694 21.2417 2.79168 16.1343 1.41344M22.6547 20.1278C20.4689 23.0835 16.9583 25 13 25C12.2953 25 11.6048 24.9393 10.9334 24.8227M10.9334 24.8227C11.0241 24.3006 11.1428 23.8692 11.2965 23.6301C11.9281 22.6475 14.0337 23.3494 14.2443 22.8581C14.4548 22.3668 13.5424 21.8053 12.63 21.3842C11.7176 20.9631 10.1735 20.542 9.96297 18.5066C9.75241 16.4712 8.76982 16.8221 8.55926 16.5414C8.34871 16.2607 5.89223 15.4886 5.11998 14.0849C4.34773 12.6812 5.1202 10.2949 5.11998 9.66327C5.11983 9.21675 3.18372 8.73743 1.87768 8.48668M10.9334 24.8227C5.29078 23.8433 1 18.9227 1 13C1 11.4036 1.31174 9.87994 1.87768 8.48668M1.87768 8.48668C3.66115 4.09599 7.96902 1 13 1C14.0844 1 15.1351 1.14383 16.1343 1.41344"
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
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
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

               <div className="promo__image">
                  <img
                     src="/rocket-orbiting-earth.png"
                     alt="rocket-orbiting-earth"
                     className="promo__image-img"
                  />
               </div>
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
                  <img src="/rocket.svg" alt="rocket Image" />
               </figure>
               <p className="footer__text">Exciting space adventure!</p>
            </div>
         </footer>
      </div>
   );
}

export default App;
