import { combineReducers } from 'redux'
import Moment from 'moment'
import { SEARCH_RESULT, ERROR_HANDEL, LOADING_ON, LOADING_OFF } from './actions'

function dataStore(
  state = {
    SearchResultList: [],
    PaginationCount: 0,
    ResponsitoryDetail: {},
    QueryString: '',
    ErrorMessage: '',
    Loading: false,
  },
  action
) {
  switch (action.type) {
    case SEARCH_RESULT:
      const { total_count, inputContent, items } = action.data
      const pagination_count = Math.ceil(total_count / 10)
      const newSearchResultList = items.map(item => {
        return {
          RepositoryName: item.name,
          OwnerName: item.owner.login,
          CreatedDate: Moment(item.created_at).format('L'),
          UpdatedDate: Moment(item.updated_at).format('L'),
          StarCount: item.stargazers_count,
          Watchers: item.watchers,
        }
      })
      console.log(newSearchResultList)
      return {
        ...state,
        SearchResultList: newSearchResultList,
        PaginationCount: pagination_count > 10 ? 10 : pagination_count,
        QueryString: inputContent,
      }
    case ERROR_HANDEL:
      console.error(`ERROR_HANDEL ${action.data}`)
      return state
    default:
      return state
  }
}

function pageControl(
  state = {
    Loading: false,
  },
  action
) {
  switch (action.type) {
    case LOADING_ON:
      return {
        ...state,
        Loading: true,
      }
    case LOADING_OFF:
      return {
        ...state,
        Loading: false,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ dataStore, pageControl })

export default rootReducer
