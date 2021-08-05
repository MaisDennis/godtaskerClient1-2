
import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: auto;

  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10px; // This is the way it is.
    min-height: 120px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0;
    margin: 4px 0;
    background-color: #fff;
    /* background: #d13344; */
  }

  .line-div.canceled {
    background-color: #F5F5F5;
  }

  .line-div.selected {
    border: 2px solid #264653;
  }

  .line-div.canceled.selected {
    border: 2px solid #000;
  }

  .left-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 20%;
    /* background-color: #D3DAFF; */
    background-image: linear-gradient(to right, #264653, #fff);
  }

  .center-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: auto;
    padding: 4px 0;
    /* background-color: #F0F; */
  }

  .right-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100%;
    width: 10%;
    /* background-color: #F0FFF0; */
  }

  .image-logo-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #fff;
  }


  .image-logo {
    height: 100%;
    width: auto;
  }

  .label-div {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 90%;
    /* background-color: #F0FFF0; */
  }

  .task-label {
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 4px 8px 0;
    color: #264653;
    /* background: #eac853; */
  }

  .item-label {
    text-align: left;
    overflow: hidden;
    margin: 8px 8px 4px;
    /* background: #eac; */
  }

  .dates-wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 8px 0 4px;
    /* background-color: #e22; */
  }

  .dates-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 8px;
    /* background-color: #e22; */
  }

  .due-date-div {
    width: auto;
    /* background-color: #ea3; */
  }

  .due-date-label {
    margin-right: 4px;
    /* background-color: #daf1e0; */
  }

  .startdate {
    font-weight: bold;
    width: auto;
    margin: 0;
    /* background-color: #4433ee; */
  }

  .startdate.green {
    color: #2A9D8F;
  }
  .duedate {
    width: auto;
    border-radius: 16px;
    padding: 4px 8px;
  }
  .duedate.red {
    background-color: #EBA5A5;
  }

  .duedate.green {
    background-color: #D3FFF0;
  }

  .status-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    width: 90%;
    margin: 12px 0 4px;
    /* background-color: #443e; */
  }

  .status-test-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    /* background-color: #443e; */
  }

  .status-complete-div {
    display: flex;
    flex-direction: row;
    height: 12px;
    width: 80%;
    margin: 0;
    border-radius: 8px;
    background-color: #ddd;
  }

  .status-incomplete-div {
    height: 12px;
    border-radius: 8px;
    /* background-color: #daf1e0; */
    background-image: linear-gradient(to right, #ffdd33, #ff892e);
  }

  .status-span {
    /* position: relative; */
    font-size: 12px;
    /* background-color: #999; */
  }

  .bell-label {
    display: flex;
    align-items: center;
    width: 48px;
    /* background-color: #43e; */
  }

  .bell-label.last {
    display: flex;
    align-items: center;
    width: 48px;
    /* margin-right: 12px; */
    /* background-color: #999; */
  }

  @media (max-width: 1400px) {
    /* padding: 4px; */

    .item-label {
      width: 80px;
      font-size: .8rem;
      /* background: #eac853; */
    }

    .worker-profile-div {
      width: 80px;
      font-size: .8rem;
      /* background: #d1ffbd; */
    }
    img {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      margin: 1px;
    }

    .short-label {
      width: 72px;
      font-size: .8rem;
      /* background-color: #4433ee; */
    }

    .list-select-4 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-3 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-2 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-1 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }

    .startdate {
      width: 64px;
      font-size: 10px;
      border-radius: 12px;
      margin: auto 4px;
      /* background: #F5F5F5; */
    }

    .duedate {
      width: 64px;
      font-size: 10px;
      border-radius: 12px;
      margin: auto 4px
    }

    .status-label {
      width: 72px;
    /* background-color: #43ee; */
  }

    .bell-label {
      width: 24px;
      /* background-color: #999; */
    }

    .bell-label.last {
      width: 24px;
      /* background-color: #999; */
    }
  }

  @media (max-width: 620px) {
    .item-label {
      width: 60px;
      font-size: .6rem;
      /* background: #eac853; */
    }

    .worker-profile-div {
      width: 60px;
      font-size: .6rem;
      /* background: #d1ffbd; */
    }

    .short-label {
      width: 60px;
      font-size: .6rem;
      /* background-color: #4433ee; */
    }

    .list-select-4 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }

    .list-select-3 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }

    .list-select-2 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }

    .list-select-1 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }

    .startdate {
      width: 40px;
      font-size: .5rem;
      border-radius: 4px;
      padding: 0;
      margin: auto 4px;
      /* background-color: #F5F5F5; */
    }

    .duedate {
      width: 40px;
      font-size: .5rem;
      border-radius: 4px;
      padding: 0;
      margin: auto 4px;
      background-color: #F5F5F5;
    }
    .duedate.red {
      background-color: #f5f5f5;
    }

    .duedate.green {
      background-color: #f5f5f5;
    }

    .status-complete-div {
      display: flex;
      flex-direction: row;
      height: 8px;
      width: 90%;
      margin: 0 auto;
      border-radius: 8px;
      background-color: #F5F5F5;
    }

    .status-incomplete-div {
      height: 8px;
      border-radius: 8px;
      /* background-color: #daf1e0; */
      /* background-image: linear-gradient(to right, #ffdd33, #ff892e); */
    }

    .status-label {
      width: 48px;

      /* background-color: #43ee; */
    }

    .status-span {
      font-size: .6rem;
      /* background-color: #999; */
    }

    .bell-label {
      width: 18px;
      /* background-color: #43e; */
    }

    .bell-label.last {
      width: 18px;
      /* background-color: #43e; */
    }

    .others-button {
      font-size: .6rem;
    }
  }
`;

export const Line = styled.div`
  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    min-height: 66px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 4px 0;
    margin: 4px 0;
    background-color: #fff;
    /* background: #d1ffbd; */
  }
  .line-div.canceled {
    background-color: #F5F5F5;
  }
  .line-div.selected {
    border: 2px solid #666;
  }
  .line-div.canceled.selected {
    border: 2px solid #666;
  }
  .worker-profile-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 330px;
    /* background: #d1ffbd; */
  }
  img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin: 4px 8px;
  }
  .item-label {
    width: 220px;
    max-width: 220px;
    overflow: hidden;
    /* background: #eac853; */
  }

  .dates-wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 8px 0 4px;
    /* background-color: #e22; */
  }

  .dates-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    margin: 0 8px;
    /* background-color: #e22; */
  }

  .due-date-div {
    width: auto;
    /* background-color: #ea3; */
  }

  .due-date-label {
    margin-right: 4px;
    /* background-color: #4ee; */
  }

  .startdate {
    width: 102px;
    border-radius: 24px;
    padding: 4px;
    margin: 0 4px;
    background-color: #f9f9f9;
  }
  .startdate.green {
    background-color: #009966;
  }
  .duedate {
    width: 102px;
    max-width: 110px;
    border-radius: 24px;
    padding: 4px;
    margin: auto 4px;
  }
  .duedate.red {
    /* background-color: #EE204D; */
    background-color: #f64C75;
  }
  .duedate.green {
    background-color: #009966;
    /* background-color: #BCDF8A; */
  }
  .status-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 110px;
    max-width: 110px;
    margin: auto 0;
    /* background-color: #443e; */
  }
  .status-complete-div {
    display: flex;
    flex-direction: row;
    height: 12px;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #F5F5F5;
  }
  .status-incomplete-div {
    height: 12px;
    border-radius: 8px;
    /* background-color: #daf1e0; */
    background-image: linear-gradient(to right, #ffdd33, #ff892e);
  }
  .status-span {
    position: relative;
    font-size: 12px;
    /* background-color: #999; */
  }
  .bell-label {
    display: flex;
    align-items: center;
    width: 48px;
    /* background-color: #43e; */
  }
  .bell-label.last {
    display: flex;
    align-items: center;
    width: 48px;
    /* margin-right: 12px; */
    /* background-color: #999; */
  }
  @media (max-width: 1400px) {
    /* padding: 4px; */
    .item-label {
      width: 80px;
      font-size: .8rem;
      /* background: #eac853; */
    }
    .worker-profile-div {
      width: 80px;
      font-size: .8rem;
      /* background: #d1ffbd; */
    }
    img {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      margin: 1px;
    }
    .short-label {
      width: 72px;
      font-size: .8rem;
      /* background-color: #4433ee; */
    }
    .list-select-4 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-3 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-2 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .list-select-1 {
      height: 16px;
      width: 64px;
      font-size: 12px;
      margin: auto 4px;
      /* background-color: #a0daa9; */
    }
    .startdate {
      width: 64px;
      font-size: 10px;
      border-radius: 12px;
      margin: auto 4px;
      /* background: #F5F5F5; */
    }
    .duedate {
      width: 64px;
      font-size: 10px;
      border-radius: 12px;
      margin: auto 4px
    }
    .status-label {
      width: 72px;
    /* background-color: #43ee; */
  }
    .bell-label {
      width: 24px;
      /* background-color: #999; */
    }
    .bell-label.last {
      width: 24px;
      /* background-color: #999; */
    }
  }
  @media (max-width: 620px) {
    .item-label {
      width: 60px;
      font-size: .6rem;
      /* background: #eac853; */
    }
    .worker-profile-div {
      width: 60px;
      font-size: .6rem;
      /* background: #d1ffbd; */
    }
    .short-label {
      width: 60px;
      font-size: .6rem;
      /* background-color: #4433ee; */
    }
    .list-select-4 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }
    .list-select-3 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }
    .list-select-2 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }
    .list-select-1 {
      height: 16px;
      width: 40px;
      font-size: .6rem;
      margin: auto 2px;
      padding: 0;
      /* background-color: #a0daa9; */
    }
    .startdate {
      width: 40px;
      font-size: .5rem;
      border-radius: 4px;
      padding: 0;
      margin: auto 4px;
      /* background-color: #F5F5F5; */
    }
    .duedate {
      width: 40px;
      font-size: .5rem;
      border-radius: 4px;
      padding: 0;
      margin: auto 4px;
      background-color: #F5F5F5;
    }
    .duedate.red {
      background-color: #f5f5f5;
    }
    .duedate.green {
      background-color: #f5f5f5;
    }
    .status-complete-div {
      display: flex;
      flex-direction: row;
      height: 8px;
      width: 90%;
      margin: 0 auto;
      border-radius: 8px;
      background-color: #F5F5F5;
    }
    .status-incomplete-div {
      height: 8px;
      border-radius: 8px;
      /* background-color: #daf1e0; */
      /* background-image: linear-gradient(to right, #ffdd33, #ff892e); */
    }
    .status-label {
      width: 48px;
      /* background-color: #43ee; */
    }
    .status-span {
      font-size: .6rem;
      /* background-color: #999; */
    }
    .bell-label {
      width: 18px;
      /* background-color: #43e; */
    }
    .bell-label.last {
      width: 18px;
      /* background-color: #43e; */
    }
    .others-button {
      font-size: .6rem;
    }
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  display: flex;
  margin: auto;
  ${props => props.hasUnread && css`
    visibility:${props.hasUnread || 'hidden'};
    /* visibility: hidden; */
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      width: 16px;
      height: 16px;
      background: #daf1e0;
      color: #111;
      font-size: 12px;
      /* padding-top: 1px; */
      content: '${props.hasUnread}';
      border-radius: 50%;
    }
  `}

  @media (max-width: 1400px) {
    width: 18px;
    height: 18px;
    ${props => props.hasUnread && css`
      visibility:${props.hasUnread || 'hidden'};
      /* visibility: hidden; */
      &::after {
        position: absolute;
        right: 0;
        top: 16px;
        width: 11px;
        height: 11px;
        background: #daf1e0;
        color: #111;
        font-size: 9px;
        /* padding-top: 1px; */
        content: '${props.hasUnread}';
        border-radius: 50%;
      }
    `}
  }
  @media (max-width: 620px) {
    width: 16px;
    height: 16px;
    ${props => props.hasUnread && css`
      visibility:${props.hasUnread || 'hidden'};
      /* visibility: hidden; */
      &::after {
        position: absolute;
        right: 0;
        top: 20px;
        width: 10px;
        height: 10px;
        background: #daf1e0;
        color: #111;
        font-size: 8px;
        /* padding-top: 1px; */
        content: '${props.hasUnread}';
        border-radius: 50%;
      }
    `}
  }

`;
