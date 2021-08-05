import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { button } from 'react'

export const Container = styled.button`
  display: contents;
  .div01 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 108px;
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 8px;
    transition: background 0.2s;
    color: #fff;
    background-color: #18A0FB;
    &:hover {
      color: ${darken(0.2, '#fff')};
      background-color: ${darken(0.2, '#18A0FB')};
    }
  }

  .div02 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s;
    color: #fff;
    background-color: #18A0FB;
    margin-right: 8px;
    &:hover {
      background-color: ${lighten(0.2, '#18A0FB')};
    }
  }

  .div03 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s;
    color: #fff;
    background-color: #403F4C;
    &:hover {
      background-color: ${lighten(0.2, '#403F4C')};
    }
  }

  .div04 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 120px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #1B2432;
    border-radius: 16px;
    padding: 4px 8px;
    margin: 0 auto;
    transition: background-color 0.2s;
    color: #fff;
    background-color: #1B2432;
    /* &:hover {
      color: ${darken(0.2, '#fff')};
      background-color: ${lighten(0.2, '#1B2432')};
    } */
  }

  .div05 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 120px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #1B2432;
    border-radius: 16px;
    padding: 4px 8px;
    margin: 0 auto;
    transition: background-color 0.2s;
    color: #1B2432;
    background-color: #fff;
    &:hover {
      color: #fff;
      border-color: #403F4C;
      background-color: #403F4C;
      /* color: ${lighten(0.2, '#1B2432')};
      background-color: ${darken(0.2, '#fff')}; */
    }
  }
`;
