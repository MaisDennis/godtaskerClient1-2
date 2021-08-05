import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  font-weight: normal;
  margin: 0;
  /* background-color: #999; */

  .header-div {
    display: flex;
    flex-direction: row;
    height: 8vh;
    width: 100%;
    background-color: #fff;
    /* background-color: #f00; */
  }

  .left-header-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20vw;
    /* background-color: #fff; */
  }

  .header-img {
    height: 48px;
    width: auto;
    /* background-color: #4433ee; */
  }

  .center-header-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 60vw;
    /* background-color: #e4e4; */
  }

  .header-ul {
    list-style-type: none;
    /* background-color: #999; */
  }

  .header-li {
    display: inline;
    font-size: 18px;
    font-weight: 600;
    margin: 24px;
    color: #18A0FB;
  }

  .right-header-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20vw;
    /* background-color: #ee3; */
  }

  .header-button {
    height: 36px;
    width: 108px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #18A0FB;
    border-radius: 4px;
    margin: 4px 4px 8px 4px;
    color: #fff;
    margin-left: 16px;
    background-color: #18A0FB;
  }

  .header-button.white {
    color: #18A0FB;
    background-color: #fff;
  }

  .body-div {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 0;
    background-color: #fff;
  }

  .hero-div {
    display: flex;
    flex-direction: row;
    height: 84vh;
    justify-content: center;
    background-color: #000;
  }

  .hero-background-img {
    height: 100%;
    width: 100%;
    opacity: 0.7;
  }

  .hero-hover-div {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20vh;
    left: 10vw;
    /* background-color: #666; */
  }

  .hero-strong {
    font-size: 48px;
    text-align: left;
    width: 700px;
    margin-bottom: 20px;
    color: #fff;
  }

  .hero-subtitle {
    font-size: 24px;
    text-align: left;
    line-height: 36px;
    width: 550px;
    margin-bottom: 20px;
    color: #fff;
  }

  .hero-button {
    font-size: 18px;
    font-weight: bold;
    height: 42px;
    width: 210px;
    border: 1px solid #18A0FB;
    border-radius: 4px;
    color: #fff;
    background-color: #18A0FB;
  }

  .qr-hover-div {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10vh;
    right: 5vw;
    /* background-color: #666; */
  }

  .sub-hero-div.top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 84vh;
    width: 100%;
    background-color: #fff;
  }

  .sub-hero-div.bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 84vh;
    width: 100%;
    background-color: #ddd;
  }

  .sub-hero-div.responsive {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #fff;
    /* background-color: #f00; */
  }

  .img-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;
    /* margin: 48px; */
    /* background-color: #f00; */
  }

  .mockup-img {
    height: auto;
    width: 30%;
    margin: auto 4px;
  }

  .sub-hero-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
    /* background-color: #4ee; */
  }

  .sub-hero-message-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 12px;
    /* background-color: #4433ee; */
  }

  .sub-hero-strong {
    font-size: 32px;
    text-align: left;
    width: auto;
    margin-bottom: 16px;
    color: #000;
  }

  .sub-hero-strong.bottom {
    color: #fff;
  }

  .sub-hero-ul {
    list-style-type: none;
    height: auto;
    width: 100%;
    /* background-color: #f00; */
  }

  .sub-hero-li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: left;
    margin-bottom: 16px;
    color: #000;
    /* background-color: #4ee; */
  }

  .sub-hero-li.bottom {
    color: #fff;
  }

  .sub-hero-li.examples {
    margin-bottom: 16px;
  }

  .sub-text-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    margin: 8px 0;
    /* background-color: #ee3; */
  }

  .sub-hero-label {
    max-width: 100%;
    margin-left: 8px;
    /* background-color: #4ee; */
  }


  .sub-text-label {
    font-size: 18px;
    font-weight: normal;
    line-height: 28px;
    width: 80%;
    color: #666;
    /* background-color: #666; */
  }

  /* .help-ul {
    margin-left: 32px;
  } */

  .sub-hero-div.about {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 84vh;
    width: 100%;
    background-color: #fff;
  }

  .sub-hero-examples-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 95%;
    /* background-color: #f5f; */
  }

  .sub-hero-examples-div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    /* gap: 3rem 1rem; */
    /* align-items: center; */
    /* justify-content: flex-end; */
    /* height: 80vh; */
    width: auto;
    margin: 0 48px;
    /* background-color: #222; */
  }

  .sub-hero-examples-img {
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 150px;
    /* background-color: #999; */
  }

  .about-li {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: left;
    line-height: 28px;
    margin-bottom: 16px;
    color: #000;
    /* background-color: #4ee; */
  }

  .about-li.last {
    font-weight: bold;
    font-size: 21px;
    /* color: #f00; */
  }

  .sign-up-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #222;
  }

  .sign-up-strong {
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    width: auto;
    margin: 24px 0;
    color: #999;
    /* background-color: #4433ee; */
  }

  .sign-up-top-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #ee3; */
  }

  .sign-up-bottom-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    margin-top: 48px;
    /* background-color: #4433ee; */
  }

  .sign-up-title-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-top: 12px;
    /* background-color: #f00; */
  }

  .app-p {
    font-size: 14px;
    margin: 8px;
  }

  .app-p.white {
    color: #fff;
  }

  .apple-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    border: 2px solid #999;
    border-radius: 8px;
    margin: 8px;
    /* background-color: #ee3; */
  }

  .android-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    border: 2px solid #999;
    border-radius: 8px;
    margin: 8px;
    /* background-color: #f66; */
  }

  .apple-div.white {
    border: 2px solid #fff;
  }

  .android-div.white {
    border: 2px solid #fff;
  }

  .qrcode-img {
    height: 120px;
    width: auto;
    margin: 36px;
  }

  .footer-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100%;
    /* border-top: 1px solid #ccc; */
    background-color: #222;
    /* background-color: #f00; */
  }

  .footer-img {
    height: 48px;
    width: auto;
    /* background-color: #4433ee; */
  }

  .footer-li {
    display: inline;
    font-size: 14px;
    /* font-weight: 600; */
    margin: 32px;
    color: #999;
  }

  .footer-p {
    font-size: 10px;
    color: #f5f5f5;
  }

  @media (max-width: 1400px) {
    .header-img {
      height: 36px;
    }

    .header-li {
      font-size: 14px;
      margin: 18px;
    }

    .header-button {
      font-size: 14px;
      height: 36px;
      width: 108px;
    }

    .hero-div {
      height: 90vh;
    }

    .hero-strong {
      font-size: 36px;
    }

    .hero-button {
      font-size: 16px;
    }

    .sub-hero-div.top {
      display: none;
    }

    .sub-hero-div.responsive {
      display: flex;
      height: 100%;
    }

    .sub-hero-div.bottom {
      height: 100%;
    }

    .sub-hero-wrapper {
      flex-direction: column;
    }

    .sub-hero-img {
      height: 500px;
      width: auto;
      max-width: 90%;
      margin: 0 auto 32px;
    }

    .sub-hero-message-div {
      /* position: absolute; */
    }

    .sub-hero-strong {
      font-size: 36px;
      opacity: 0.9;
      color: #222;
    }

    .sub-hero-strong.bottom {
      color: #fff;
    }

    .sub-hero-strong.examples {
      /* font-size: 24px; */
      color: #222;
    }

    .sub-hero-li {
      font-size: 21px;
      color: #222;
    }

    .sub-hero-li.bottom {
      color: #fff;
    }

    .sub-hero-li.examples {
      margin-bottom: 24px;
      color: #222;
    }

    .sub-hero-examples-wrapper {
      height: 100%;
      margin: 0 auto 32px;
      /* background-color: #f00; */
    }

    .sub-hero-examples-div {
      margin: 0 auto;
      max-width: 80%;
    }


    .sub-hero-examples-img {
      /* opacity: 0.2; */
      min-width: 0;
    min-height: 0;
    }

    .sign-up-div {
      height: auto;
    }

    .sign-up-strong {
      text-align: justify;
    }

    .sign-up-bottom-div {
      width: 70%;
    }

    .footer-img {
      height: 36px;
    }

    .footer-li {
      font-size: .8rem;
    }

    .footer-p {
      font-size: .6rem;
    }
  }

  @media (max-width: 900px) {
    .header-div {
      height: 15vh;
    }

    .sub-hero-img {
      height: auto;
      width: auto;
      max-width: 90%;
      margin: 0 auto 32px;
    }

    .sub-hero-strong {
      font-size: 1.6rem;
    }

    .sub-hero-li {
      font-size: 1.2rem;
    }

    .sign-up-strong {
      font-size: 1.6rem;
      width: 90%;
    }

    .footer-div {
      height: 15vh;
    }
  }

  @media (max-width: 620px) {
    .header-div {
      padding: 0 8px;
    }

    .header-img {
      height: 21px;
    }

    .header-li {
      font-size: .6rem;
      margin: 4px;
    }

    .header-button {
      font-size: .6rem;
      height: 24px;
      width: 72px;
    }

    .hero-div {
      background-color: #222;
      overflow-x: hidden;
    }

    .hero-background-img {
      /* height: 100%;
      width: 100%; */
      width: auto;
      opacity: 0.9;
    }

    .hero-strong {
      font-size: 1.6rem;
      width: 80%;
    }

    .hero-button {
      font-size: .9rem;
    }

    .sub-hero-img {
      height: auto;
      width: 100%;
    }

    .sub-hero-message-div {
      /* width: 100%; */

    }

    .sub-hero-strong {
      font-size: 1.2rem;
      width: 100%;
    }

    .sub-hero-strong.bottom {
      color: #fff;
    }

    .sub-hero-strong.examples {
      /* font-size: 24px; */
      color: #222;
    }

    .sub-hero-li {
      font-size: .8rem;
      color: #222;
    }

    .sub-hero-li.bottom {
      color: #fff;
    }

    .sub-hero-examples-img {
      height: auto;
      min-width: 0;
      min-height: 0;
    }

    .sign-up-div {
      height: auto;
      /* margin-bottom: 16px; */
      background-color: #4ee;
    }

    .sign-up-strong {
      font-size: 1rem;
      line-height: 1.6rem;
    }

    .sign-up-bottom-div {
      flex-direction: column;
      height: auto;

    }

    .footer-img {
      height: 36px;
    }

    .footer-li {
      font-size: .6rem;
    }

    .footer-p {
      font-size: .4rem;
    }
  }

`;
