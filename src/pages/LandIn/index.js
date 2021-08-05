import React from 'react'
import { GrApple, GrAndroid } from 'react-icons/gr';
// -----------------------------------------------------------------------------
import { Container } from './styles'
import history from '~/services/history';
import logo from '~/assets/godtaskerFont/GroupgodtaskerFontPlainBlack.svg';
// import godtaskerFont from '~/assets/godtaskerFont/GroupgodtaskerFontLogoGrey.svg';
// import godtaskerFontFooter from '~/assets/godtaskerFont/GroupgodtaskerFontPlainGrey.svg';
import footerLogo from '~/assets/detective/detective.svg';
import Silver from '~/assets/stockImages/Silver.png';
import hero from '~/assets/stockImages/hero02.jpg';
  // import subHeroTop from '~/assets/stockImages/sub-hero-top.jpg';
  // import subHeroBottom from '~/assets/stockImages/sub-hero-bottom.jpg';
import subHeroExample1 from '~/assets/stockImages/sub-hero-example-1.jpg';
import subHeroExample2 from '~/assets/stockImages/sub-hero-example-2.jpg';
import subHeroExample3 from '~/assets/stockImages/sub-hero-example-3.jpg';
import subHeroExample4 from '~/assets/stockImages/sub-hero-example-4.jpg';
import subHeroExample5 from '~/assets/stockImages/sub-hero-example-5.jpg';
import subHeroExample6 from '~/assets/stockImages/sub-hero-example-6.jpg';
import qrcodegeneric from '~/assets/stockImages/qrcodegeneric.png';
import { CgCheckO } from 'react-icons/cg';

export default function LandIn() {

  function handleSingIn() {
    history.push('/login');
  }

  function handleSingUp() {
    history.push('/register');
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <header className="header-div">
        <div className="left-header-div">
          <img className="header-img" src={logo} alt="godtaskerFont"/>
        </div>
        <div className="center-header-div">
          {/* <ul className="header-ul">
            <li className="header-li">Features</li>
            <li className="header-li">Pricing</li>
            <li className="header-li">Community</li>
            <li className="header-li">Support</li>
          </ul> */}
        </div>
        <div className="right-header-div">
        <button
            className="header-button white"
            onClick={() => handleSingIn()}
          >Log In</button>
          <button
            className="header-button"
            onClick={() => handleSingUp()}
          >Sign Up</button>
        </div>
      </header>

      <body className="body-div">
        <div className="hero-div">
          <img className="hero-background-img" src={hero} alt="hero" />
          <div className="hero-hover-div">
            <strong className="hero-strong">
              Make tasks as clear as day
            </strong>
            <strong className="hero-subtitle">
              Use Godstasker to create tasks, send, and get back desired results.<br/>
              {/* Delegate tasks to your team. */}
              {/* Help them bring the answers you need. */}

            </strong>
            <button
              className="hero-button"
              onClick={() => handleSingIn()}
            >Start Today for Free</button>
          </div>

          <div className="qr-hover-div">
            <p className="app-p white">Get the App</p>
            <div className="sign-up-bottom-div">
              <div className="apple-div white">
                <div className="sign-up-title-div">
                  <GrApple size={32} color='#fff'/>
                    <p className="app-p white">
                      App Store
                    </p>
                </div>

                <img className="qrcode-img" src={qrcodegeneric} alt="qrcodegeneric"/>
              </div>
              <div className="android-div white">
                <div className="sign-up-title-div">
                  <GrAndroid size={32} color='#fff'/>
                    <p className="app-p white">
                      Google Play
                    </p>
                </div>

                <img className="qrcode-img" src={qrcodegeneric} alt="qrcodegeneric"/>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-hero-div top">
          <div className="sub-hero-wrapper">
            <div className="sub-hero-message-div">
              <strong className="sub-hero-strong">
                Delegate and receive tasks
              </strong>
              <ul className="sub-hero-ul">
                  <li className="sub-hero-li">
                    <div className="sub-text-div">
                      <CgCheckO size={24}/>
                      <label className="sub-hero-label">
                        Need to give work to someone?
                      </label>
                    </div>
                    <label className="sub-text-label">
                      Easily create a task and send it.
                      The task will have a due date, and can have a list of sub-items.
                      You can require a photo of the result when the task is complete.
                    </label>
                  </li>

                  <li className="sub-hero-li">
                    <div className="sub-text-div">
                      <CgCheckO size={24}/>
                      <label className="sub-hero-label">
                        You can also receive a task too!
                      </label>
                    </div>
                      <label className="sub-text-label">
                        It's important to have everything clear from the beggining, so nobody is taken by surprise.
                        You can receive tasks from others, with the option to accept.
                        Update the progress in real time, and confirm your work with a photo to show for.
                      </label>
                  </li>
              </ul>
            </div>
            <div className="img-div">
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
            </div>
          </div>
        </div>

        <div className="sub-hero-div bottom">
          <div className="sub-hero-wrapper">
            <div className="img-div">
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
              <img className="mockup-img" src={Silver} alt="sub-hero-top"/>
            </div>
            <div className="sub-hero-message-div">
              <strong className="sub-hero-strong">
                Everything you need, simple and precise
              </strong>
              <ul className="sub-hero-ul">
                  <li className="sub-hero-li">
                    <div className="sub-text-div">
                      <CgCheckO size={24}/>
                      <label className="sub-hero-label">
                        Keep track
                      </label>
                    </div>
                    <label className="sub-text-label">
                      Both your delegated tasks, and received tasks are shown by the numbers to keep you updated.
                      Don't let anything slip by!
                    </label>
                  </li>

                  <li className="sub-hero-li">
                    <div className="sub-text-div">
                      <CgCheckO size={24}/>
                      <label className="sub-hero-label">
                        Chat
                      </label>
                    </div>
                      <label className="sub-text-label">
                        A chat feature for any questions and answers along the way.
                        Remember, communication is key!
                      </label>
                  </li>

                  <li className="sub-hero-li">
                    <div className="sub-text-div">
                      <CgCheckO size={24}/>
                      <label className="sub-hero-label">
                        Show off your personal profile
                      </label>
                    </div>
                      <label className="sub-text-label">
                      Get noticed, let people find you, and request your amazing work through tasks.
                      Create a jaw-dropping bio, and leave your Instagram or LinkedIn.
                      </label>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sub-hero-div about">
          <div className="sub-hero-wrapper">
          <div className="sub-hero-message-div">
              <strong className="sub-hero-strong">
                Some examples of use
              </strong>
              <ul className="sub-hero-ul">
                <li className="about-li">Task your employees on the job.</li>
                <li className="about-li">Collaboration between co-workers and across departments with clear instructions along with a helpdesk.</li>
                <li className="about-li">Sales task force: setting goals, setting locations, scheduling clients.</li>
                <li className="about-li">Fitness trainers: Workout routine and completion confirmation (can be photo-required 😥).</li>
                <li className="about-li">A to-do list for the babysitter/housecleaner.</li>
                <li className="about-li">By yourself. To-do lists, checklists, meeting schedules, resolutions.</li>
                <li className="about-li last">The possibilities are limitless!</li>
              </ul>
            </div>

          <div className="sub-hero-examples-wrapper">
            <div className="sub-hero-examples-div">
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample1} alt="sub-hero-top"/>
              </article>
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample2} alt="sub-hero-top"/>
              </article>
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample3} alt="sub-hero-top"/>
              </article>
            </div>
            <div className="sub-hero-examples-div">
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample4} alt="sub-hero-top"/>
              </article>
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample5} alt="sub-hero-top"/>
              </article>
              <article>
              <img className="sub-hero-examples-img" src={subHeroExample6} alt="sub-hero-top"/>
              </article>
            </div>
          </div>
          </div>
        </div>

        <div className="sign-up-div">
          <div className="sign-up-top-div">
            <strong className="sign-up-strong">
              {/* godtasker should be used anytime a task is done by one person(s) for another person, planned or not. */}
              Make tasks clear<br/> Delegate like a BOSS... your team deserves it
            </strong>

            <button
              className="hero-button"
              onClick={() => handleSingIn()}
            >Join Today</button>
          </div>

          <div className="sign-up-bottom-div">
            <div className="apple-div">
              <div className="sign-up-title-div">
                <GrApple size={32} color='#fff'/>
                  <p className="app-p">
                    App Store
                  </p>
              </div>

              <img className="qrcode-img" src={qrcodegeneric} alt="qrcodegeneric"/>
            </div>
            <div className="android-div">
              <div className="sign-up-title-div">
                <GrAndroid size={32} color='#fff'/>
                  <p className="app-p">
                    Google Play
                  </p>
              </div>

              <img className="qrcode-img" src={qrcodegeneric} alt="qrcodegeneric"/>
            </div>
          </div>
        </div>
      </body>

      <footer className="footer-div">
        <div className="left-header-div">
          <img className="footer-img" src={footerLogo} alt="godtaskerFont"/>
        </div>
        <div className="center-header-div">
          {/* <ul className="header-ul">
            <li className="footer-li">Community</li>
            <li className="footer-li">Support</li>
          </ul> */}
        </div>
        <div className="right-header-div">
          <p className="footer-p">godtasker Inc. 2021, making you powerful</p>
        </div>
      </footer>
    </Container>
  )
}
