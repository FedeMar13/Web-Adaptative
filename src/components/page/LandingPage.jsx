// React Imports
import React from "react";
import Logo from "../../assets/logo.svg";
import Image1 from "../../assets/bg-pattern-1.svg";
import Mobile from "../../assets/illustration-app.png";
import circles from "../../assets/bg-pattern-2.svg";
import AndroidIcon from "../../assets/icon-android.svg";
import Apple from "../../assets/icon-apple.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";


// Styles Imports
import styles from "./LandingPage.module.css";



const LandingPage = () => {
    return(
        <>
        <header>
            <div className={styles.Equializer}>
                <img src={Logo} alt="Logo"  className={styles.Symbol}/>

                <h1>We make your music sound extraordinary.</h1>
                <p className={styles.TextOne}>A system audio equalizer specifically designed for Android and IOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>

            </div>

            <div className={styles.ConteinerImage}>
                <img src={Image1} alt="Decorative"  className={styles.Image}/>
            </div>

        </header>

        <div className={styles.Conteiner}>
            <img src={Mobile} alt="Mobile" className={styles.Phone}/>

            <img src={circles} alt="Decorative"  className={styles.Circulos}/>

            <div className={styles.Card}>
                <div className={styles.TextTwo}>
                    <h2>Premium EQ</h2>
                    <p className={styles.Info}>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take  your listening experience to a whole new level and access all our incredible features!
                    </p>
                </div>
                
                <div className={styles.TextThree}>
                    <p className={styles.Four}> $4 </p> 
                    <p className={styles.Month}> / month</p>
                </div>

                
                <a href="#" className={styles.Ios}>
                    <img src={Apple} alt="Icon Apple"className={styles.AppleIcon} />IOS Download
                </a>

                <a href="#" className={styles.Android}>
                    <img src={AndroidIcon} alt="Icon Android" className={styles.Icon}/>Android Download
                </a>
            </div>
        </div>

        <footer>

            <div className={styles.Author}>
                
                <img src={Logo} alt="Logo"  className={styles.LogoType}/>

                <div className={styles.TextFour}>
                   <p>
                      All rights reserved &copy; Equalizer 2021
                      Have any problems? Contact us via social media or 
                      email us at <strong>equalizer@example.com</strong> 
                  </p>
                </div>

                <div className={styles.Social}>
                  <a href="#" className={styles.IconFacebook}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"/></svg></a>
                   <a href="#"><img src={Instagram} alt="Logo Instagram"  className={styles.IconInstagram}/></a>
                   <a href="#"><img src={Twitter} alt="Logo Twitter"  className={styles.IconTwitter}/></a>
                </div>
            </div>

        </footer>
        </>
    )
}
export default LandingPage;