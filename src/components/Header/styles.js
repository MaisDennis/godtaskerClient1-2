import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #1B2432;
  /* background-color: #4433ee; */

  .header-wrapper {
    display: flex;
    flex-direction: row;
    height: 8vh;
    width: 100%;
    margin: 0 auto;
    /* background-color: #5edc1f; */
  }

  .image-logo {
    height: 32px;
    width: auto;
    margin: 0 16px;
    /* background: #4433ee; */
  }

  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0;
    /* background-color: #5edc; */
  }
  .header-menu-item {
    display: inline;
    margin: 0 8px;
      /* background: #ff3; */
  }

  .header-button {
    height: 36px;
    width: 108px;
    border: none;
    background: none;
    /* padding: 4px 8px; */
  }

  .header-button.selected {
    /* border: 2px solid #fff; */
    border-radius: 4px;
    /* padding: 4px 8px; */
  }

  .header-label {
    font-size: 14px;
    color: #fff;
    &:hover {
      color: ${darken(0.2, '#fff')};
    }
  }

  .header-label-selected {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .header-aside {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    /* background: #5edc; */
  }

  .settings-div {
    margin: 0 16px;
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;
    /* background: #f00; */
  }

  .profile-strong {
    font-size: 16px;
    font-style: bold;
    margin: 8px;
    color: #fff;
  }

  .drop-down-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #f00; */
  }

  .drop-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 228px;
    border-radius: 8px;
    margin: 52px 0;
    padding: 4px;
    background-color: #000;
  }

  .drop-menu-label {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    color: #18A0FB;
    /* transition: color 0.2s; */
    &:hover {
      color: ${darken(0.2, '#ddd')};
    }
  }

  .drop-menu-button {
    cursor: pointer;
    border: none;
    margin: 8px 0;
    background-color: #000;
    /* background-color: #F64C75; */
  }

  .image-background-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #ddd;
  }

  .image-user {
    height: 100%;
    width: auto;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #F5F5F5;
  }

  @media (max-width: 1400px) {
    width: 90%;
    height: 15vh;
  }

  @media (max-width: 620px) {
    width: 98%;
    margin: 0 auto;
    /* background-color: #f5f5f5; */

    .image-logo {
      display: none;
      /* background: #5edc1f; */
    }

    .header-menu-item {
      margin: 0 6px;
    }
  }
`;
