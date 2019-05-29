import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ResultTable from './ResultTable'
import LoadingPage from '../components/LoadingPage'

const styles = {
  Main: {
    boxSizing: 'border-box',
    border: '1px solid red',
    width: '100vw',
    height: '100vh',
  },
}

export class Main extends Component {
  render() {
    const { loadingStatus } = this.props
    return (
      <div style={styles.Main}>
        <SearchBar />
        <ResultTable />
        <Pagination />
        {loadingStatus && <LoadingPage />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadingStatus: state.pageControl.Loading,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
