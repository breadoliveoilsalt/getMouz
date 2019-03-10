import { combineReducers } from 'redux'
import randomDotsReducer from './randomDotsReducer'
import rainReducer from './rainReducer'
import moveItReducer from './moveItReducer'

const rootReducer = combineReducers(
  {
    randomDots: randomDotsReducer,
    rain: rainReducer,
    moveIt: moveItReducer
  }
)

export default rootReducer
