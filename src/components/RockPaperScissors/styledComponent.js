import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #223a5f;
  min-height: 100vh;
`
export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 80%;
`
export const InnerGameContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  width: 50%;
  justify-content: center;
  align-items: center;
`

export const PopupButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 6px;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`
export const ModelContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 458px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  width: 40px;
  height: 40px;
  border: none;
  margin-top: 32px;
  margin-bottom: 15px;
  outline: none;
  cursor: pointer;
`

export const PopupImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const ResultViewContainer = styled.div`
  width: 80%;
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`
export const YouAndOpponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GameImage = styled.img`
  width: 150px;
  margin-right: 20px;
`
export const GameViewHeading = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  color: #ffffff;
`
export const GameViewResult = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  font-family: 'Roboto';
  color: #ffffff;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  border-radius: 6px;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-self: center;
`
