import {
  NavHeader,
  HeaderResponse,
  NavHeading,
  NavScoreContainer,
  NavScorePara,
  NavScoreHeading,
} from './styledComponent'

const Header = props => {
  const {score} = props

  return (
    <NavHeader>
      <HeaderResponse>
        <NavHeading>ROCK PAPER SCISSORS</NavHeading>
        <NavScoreContainer>
          <NavScorePara>Score</NavScorePara>
          <NavScoreHeading>{score}</NavScoreHeading>
        </NavScoreContainer>
      </HeaderResponse>
    </NavHeader>
  )
}

export default Header
