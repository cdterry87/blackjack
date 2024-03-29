function PlayerDetails({ playerWins, playerLosses, playerBet, playerBank }) {
  let displayPlayerWins = playerWins ?? 0
  let displayPlayerLosses = playerLosses ?? 0
  displayPlayerWins = parseInt(displayPlayerWins)
  displayPlayerLosses = parseInt(displayPlayerLosses)

  let playerWinRatio = 0
  if (displayPlayerWins > 0 || displayPlayerWins > 0) {
    playerWinRatio = (
      displayPlayerWins /
      (displayPlayerWins + displayPlayerLosses)
    ).toFixed(2)
  }

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col gap-1 text-white font-semibold bg-green-800 p-3 rounded-lg text-center border border-green-950 dark:bg-gray-800 dark:border-gray-700'>
          <h3 className='font-bold text-lg uppercase'>Player Details</h3>
          <div className='flex items-center justify-between gap-6 text-xs'>
            <span>Wins: {displayPlayerWins}</span>
            <span>Losses: {displayPlayerLosses}</span>
            <span>Ratio: {playerWinRatio}</span>
          </div>
          <hr />
          <div className='flex items-center justify-between gap-6 text-xs'>
            <span>
              Bank:{' '}
              {playerBank.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </span>
            <span>
              Bet:{' '}
              {playerBet.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerDetails
