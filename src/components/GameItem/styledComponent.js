import styled from 'styled-components'

export const GameItem = styled.li`
  list-style-type: none;
`
export const GameImage = styled.img`
  width: 80px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 150px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
`
export const GameButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
