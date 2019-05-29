import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultTableItem from '../components/ResultTable'

class ResultTable extends Component {
  render() {
    const { searchResultList } = this.props
    return (
      <div>
        <ResultTableItem searchResultList={searchResultList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResultList: state.dataStore.SearchResultList,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTable)
