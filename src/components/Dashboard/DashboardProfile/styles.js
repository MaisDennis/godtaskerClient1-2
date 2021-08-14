import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  border-radius: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  padding: 8px;
  margin: 4px 4px 4px 2px;
  background-color: #fff;

  .back-button {
    display: none;
  }

  .profile-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    background-color: #4433ee;
  }

  .follow-button {
    height: 36px;
    width: 108px;
    font-weight: bold;
    border: none;
    border-radius: 24px;
    padding: 8px;
    margin: 0 8px;
    color: #fff;
    background-color: #18A0FB;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    /* min-height: 66px; */
    width: 100%;
    /* border-radius: 4px;
    border: 1px solid #ddd; */
    padding: 8px;
    margin: 8px 0;
    background-color: #fff;
    /* background-color: #d13344; */
  }

  .content-wrapper {
    /* background: #4ee; */
  }

  .left-div {

  }

  .center-div {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-left: 16px;
  /* background-color: #4433ee; */
  }

  .image-background {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 74px;
    width: 74px;
    overflow: hidden;
    border-radius: 50%;
    border-width: 2px;
    border-color: #18A0FB;
    background-color: #18A0FB;
  }

  .profile-image {
    height: 100%;
    width: auto;
    border-radius: 50%;
    border-width: 1px;
    border-color: #fff;
    background-color: #f5f5f5;
  }

  .user-name {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 4px 8px;
    color: #18A0FB;
    /* background-color: #18A3; */
  }

  .name-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 8px;
  }

  .name-label {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin: 2px 4px;
    color: #000;
    /* background-color: #4433ee; */
  }

  .followers-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: auto;
    margin: 8px;
    /* background-color: #999; */
  }

  .followers-tag {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
  }

  .number-label {
    font-weight: bold;
    font-size: 12px;
    margin-right: 4px;
    color: #18A0FB;
  }

  .followers-button {
    cursor: pointer;
    height: 28px;
    width: 84px;
    border: 1px solid #18A0FB;
    border-radius: 16px;
    padding: 4px 8px;
    background-color: #fff;
  }

  .followers-label {
    font-weight: bold;
    font-size: 12px;
    /* margin-right: 8px; */
    color: #18A0FB;
  }

  .body {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    /* background-color: #999; */
  }

  .social-media-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
    /* background-color: #4433ee; */
  }

  .social-media-tag {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 12px;
    /* background-color: #4ee; */
  }

  .social-media-label {
    min-width: 100px;
    margin: 0 0 0 4px;
  }

  .bio-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0 8px;
    /* background-color: #f00; */
  }

  .bold-label {
    font-weight: bold;
    text-align: left;
    width: 100%;
    padding: 0 8px;
    margin: 4px;
    /* background-color: #f00; */
  }

  .bio-div {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #000;
    padding: 12px;
    /* background-color: #4ee; */
  }

  .bio-text {
    /* background-color: #999; */
  }

  @media (max-width: 1400px) {
  }

  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
      toggleContainer === 2 ? 'block' : 'none'
    )};
    width: 100%;
    margin: 4px 0;
    /* background-color: #ffc87c; */

    .back-button {
      display: flex;
      justify-content: flex-end;
      /* background-color: #ffc8; */
    }
  }


`;
