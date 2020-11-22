import axios from 'axios'

const GET_GAMES = 'GET_GAMES'

// action creator
const getGames = games => ({type: GET_GAMES, games})

// thunk
export const getAllGames = () => async dispatch => {
  try {
    const {data: gamesData} = await axios.get('/api/v1/games')
    dispatch(getGames(gamesData))
  } catch (error) {
    console.log('error in getAllGames', error)
  }
}

// reducer
const games = (state = [], action) => {
  switch (action.type) {
    case GET_GAMES:
      return action.games
    default:
      return state
  }
}

export default games
