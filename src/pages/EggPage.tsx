import { GameScreen } from '../components/GameScreen'
import { ResultOverlay } from '../components/ResultOverlay'
import { PickGame } from '../components/games/PickGame'
import { EggItem } from '../components/games/EggItem'
import { CAMPAIGN } from '../lib/content'
import { GAMES } from '../lib/games'
import { getPrize } from '../lib/prizes'
import { useGameSession } from '../lib/useGameSession'

const WIN = getPrize('pulsa50')

export function EggPage() {
  const { prize, revealed, expired, setExpired, reveal, reduced } = useGameSession()
  return (
    <GameScreen
      dapat={GAMES.egg.lead}
      instruction={GAMES.egg.instruction}
      expired={expired}
      onExpire={() => setExpired(true)}
    >
      {revealed && prize ? (
        <ResultOverlay prize={prize} />
      ) : (
        <PickGame
          count={CAMPAIGN.ticketCount}
          disabled={expired || revealed}
          reduced={reduced}
          prize={WIN}
          onResult={reveal}
          renderItem={(args) => <EggItem {...args} />}
        />
      )}
    </GameScreen>
  )
}
