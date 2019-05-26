import { combineReducers } from 'redux'

function reduxMain(
  state = {
    SearchResult: {},
    Pagination: {},
    ResponsitoryDetail: {},
  },
  action
) {
  switch (action) {
    default:
      return state
  }
}

const rootReducer = combineReducers({ reduxMain })

export default rootReducer
