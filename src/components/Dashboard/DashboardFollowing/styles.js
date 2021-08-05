import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 50%;
  padding: 8px;
  margin: 4px 2px 4px 4px;
  background-color: #fff;
  /* background-color: #5edc1f; */

  .contact-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    /* background-color: #4433ee; */
  }

  .sub-tasks-buttons-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    margin: 0;
    /* background-color: #222; */
  }

  .title-label {
    font-weight: bold;
    font-size: 14px;
    margin: 0 4px;
    color: #000;
    /* background-color: #4433ee; */
  }

  .task-button {
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    color: #fff;
  }

  .task-button.blue {
    background-color: #000;
    margin-right: 8px;
    &:hover {
      background-color: ${lighten(0.2, '#000')};
    }
  }
  .task-button.grey {
    background-color: #666;
    &:hover {
      background-color: ${lighten(0.2, '#666')};
    }
  }

  .list-header-title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* margin: 8px; */
    /* background-color: #ee3; */
  }

  .list-header-strong {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 8px;
    color: #000;
    /* background-color: #9d9eb4; */
  }

  .list-header-div {
    display: flex;
    width: 100%;
    margin: 4px 0 8px;
    background: #a0daa9;
  }
`;
