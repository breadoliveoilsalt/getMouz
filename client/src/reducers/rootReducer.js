import { combineReducers } from 'redux'

// import other reducers here, such as:
// import currentArtObjectReducer from './currentArtObjectReducer'
// import errorReducer from './errorReducer'
// ...and add them to object below, separated by commas

// import testReducer from './testReducer'
import randomDotReducer from './randomDotsReducer'

const rootReducer = combineReducers(
  {
    // testReducer: testReducer,
    randomDotReducer: randomDotReducer
  }
)

export default rootReducer
