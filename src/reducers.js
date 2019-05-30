import { combineReducers } from 'redux'
import Moment from 'moment'
import {
  SEARCH_RESULT,
  SEARCH_REPOSITORY,
  CLEAN_SEARCH_REPOSITORY,
  ERROR_HANDEL,
  LOADING_ON,
  LOADING_OFF,
} from './actions'

function dataStore(
  state = {
    SearchResultList: [],
    PaginationCount: 0,
    ResponsitoryDetail: {},
    QueryString: '',
    ErrorMessage: '',
    Loading: false,
    Dialog: {
      BranchList: [],
      CommitList: [],
      RepositoryName: '',
    },
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
          CreatedDate: Moment(item.created_at).format('YYYY/MM/DD'),
          UpdatedDate: Moment(item.updated_at).format('YYYY/MM/DD'),
          StarCount: item.stargazers_count,
          Watchers: item.watchers,
        }
      })
      return {
        ...state,
        SearchResultList: newSearchResultList,
        PaginationCount: pagination_count > 100 ? 100 : pagination_count,
        QueryString: inputContent,
      }

    case SEARCH_REPOSITORY:
      const {
        data: { resBranch, resCommit, repositoryName },
      } = action

      return {
        ...state,
        Dialog: {
          BranchList: resBranch.map(item => item.name).slice(0, 10),
          CommitList: resCommit.map(item => item.commit.message).slice(0, 10),
          RepositoryName: repositoryName,
        },
      }
    case CLEAN_SEARCH_REPOSITORY:
      return {
        ...state,
        Dialog: {
          BranchList: [],
          CommitList: [],
          RepositoryName: '',
        },
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
    Dialog: false,
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
    case SEARCH_REPOSITORY:
      return {
        ...state,
        Dialog: true,
      }
    case CLEAN_SEARCH_REPOSITORY:
      return {
        ...state,
        Dialog: false,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ dataStore, pageControl })

export default rootReducer
