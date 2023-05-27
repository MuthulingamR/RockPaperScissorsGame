import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import GameItemCard from '../GameItem'

import './index.css'

import {
  GameContainer,
  ResponseContainer,
  InnerGameContainer,
  PopupButton,
  ModelContainer,
  ResultViewContainer,
  YouAndOpponentContainer,
  IndividualContainer,
  CloseButton,
  PopupImage,
  GameImage,
  GameViewHeading,
  GameViewResult,
  PlayAgainButton,
} from './styledComponent'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    choiceId: '',
    choiceUrl: '',
    randomIndex: 0,
    showResult: false,
  }

  onClickPlayAgain = () => {
    const {choicesList} = this.props
    const randomIndex = Math.ceil(Math.random() * choicesList.length - 1)
    this.setState(prevState => ({
      showResult: !prevState.showResult,
      randomIndex,
    }))
  }

  onGameBtn = (clickedId, url) => {
    const {randomIndex} = this.state
    const {choicesList} = this.props
    const {id} = choicesList[randomIndex]

    if (clickedId === id) {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        choiceId: clickedId,
        choiceUrl: url,
        score: prevState.score,
      }))
    } else if (clickedId === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        choiceId: clickedId,
        choiceUrl: url,
        score: prevState.score + 1,
      }))
    } else if (clickedId === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        choiceId: clickedId,
        choiceUrl: url,
        score: prevState.score + 1,
      }))
    } else if (clickedId === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        choiceId: clickedId,
        choiceUrl: url,
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        choiceId: clickedId,
        choiceUrl: url,
        score: prevState.score - 1,
      }))
    }
  }

  renderGameView = () => {
    const {choicesList} = this.props

    return (
      <InnerGameContainer>
        {choicesList.map(each => (
          <GameItemCard
            key={each.id}
            details={each}
            onGameBtn={this.onGameBtn}
          />
        ))}
      </InnerGameContainer>
    )
  }

  renderGameResultView = () => {
    const {choicesList} = this.props
    const {randomIndex, choiceId, choiceUrl} = this.state
    const {id, imageUrl} = choicesList[randomIndex]
    let result
    if (choiceId === id) {
      result = 'IT IS DRAW'
    } else if (choiceId === 'ROCK' && id === 'SCISSORS') {
      result = 'YOU WON'
    } else if (choiceId === 'PAPER' && id === 'ROCK') {
      result = 'YOU WON'
    } else if (choiceId === 'SCISSORS' && id === 'PAPER') {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }

    return (
      <ResultViewContainer>
        <YouAndOpponentContainer>
          <IndividualContainer>
            <GameViewHeading>YOU</GameViewHeading>
            <GameImage src={choiceUrl} alt="your choice" />
          </IndividualContainer>
          <IndividualContainer>
            <GameViewHeading>OPPONENT</GameViewHeading>
            <GameImage src={imageUrl} alt="opponent choice" />
          </IndividualContainer>
        </YouAndOpponentContainer>
        <GameViewResult>{result}</GameViewResult>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  render() {
    const {score, showResult} = this.state

    return (
      <GameContainer>
        <ResponseContainer>
          <Header score={score} />
          {showResult ? this.renderGameResultView() : this.renderGameView()}
          <Popup
            modal
            trigger={<PopupButton type="button">RULES</PopupButton>}
            className="popup-content"
          >
            {close => (
              <ModelContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size="30" />
                </CloseButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModelContainer>
            )}
          </Popup>
        </ResponseContainer>
      </GameContainer>
    )
  }
}

export default RockPaperScissors
