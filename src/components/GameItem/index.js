import {GameItem, GameButton, GameImage} from './styledComponent'

const GameItemCard = props => {
  const {details, onGameBtn} = props
  const {imageUrl, id} = details
  const testId = `${id.toLowerCase()}Button`

  const onClickGameBtn = () => {
    onGameBtn(id, imageUrl)
  }

  return (
    <GameItem>
      <GameButton data-testid={testId} type="button" onClick={onClickGameBtn}>
        <GameImage src={imageUrl} alt={id} />
      </GameButton>
    </GameItem>
  )
}

export default GameItemCard
