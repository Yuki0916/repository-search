export const SEARCH_RESULT = 'SEACH/RESULT'
export const ERROR_HANDEL = 'ERROR/HANDLE'
export const LOADING_ON = 'LOADING/ON'
export const LOADING_OFF = 'LOADING/OFF'

const fetchSuceess = (resData, inputContent) => ({
  type: SEARCH_RESULT,
  data: { ...resData, inputContent },
})

const errorHandle = failText => ({
  type: ERROR_HANDEL,
  data: failText,
})

const showLoadingPage = () => ({ type: LOADING_ON })
const hideLoadingPage = () => ({ type: LOADING_OFF })

export const fetchSearchRepository = inputContent => async dispatch => {
  try {
    dispatch(showLoadingPage())
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${inputContent}&page=1&per_page=10`
    )
    dispatch(fetchSuceess(await response.json(), inputContent))
    dispatch(hideLoadingPage())
  } catch (err) {
    dispatch(errorHandle(err))
  }
}

export const fetchOtherPageRepository = (
  pageNumber,
  queryString
) => async dispatch => {
  try {
    dispatch(showLoadingPage())
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${queryString}&page=${pageNumber}&per_page=10`
    )
    dispatch(fetchSuceess(await response.json(), queryString))
    dispatch(hideLoadingPage())
  } catch (err) {
    dispatch(errorHandle(err))
  }
}
