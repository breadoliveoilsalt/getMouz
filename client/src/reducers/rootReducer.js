import { combineReducers } from 'redux'

// import other reducers here, such as:
// import currentArtObjectReducer from './currentArtObjectReducer'
// import errorReducer from './errorReducer'
// ...and add them to object below, separated by commas

// import testReducer from './testReducer'
import randomDotsReducer from './randomDotsReducer'
import rainReducer from './rainReducer'

const rootReducer = combineReducers(
  {
    // testReducer: testReducer,
    randomDots: randomDotsReducer,
    rain: rainReducer
  }
)

export default rootReducer
