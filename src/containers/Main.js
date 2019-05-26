import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ResultTable from './ResultTable'

const styles = {
  Main: {
    boxSizing: 'border-box',
    border: '1px solid red',
    minWidth: '100vw',
    minHeight: '100vh',
  },
}

export class Main extends Component {
  render() {
    return (
      <div style={styles.Main}>
        <SearchBar />
        <ResultTable />
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
