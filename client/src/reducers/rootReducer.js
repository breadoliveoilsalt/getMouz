import { combineReducers } from 'redux'

// import other reducers here, such as:
// import currentArtObjectReducer from './currentArtObjectReducer'
// import errorReducer from './errorReducer'
// ...and add them to object below, separated by commas

import testReducer from './testReducer'

const rootReducer = combineReducers(
  {
    testReducer: testReducer
  }
)

export default rootReducer
