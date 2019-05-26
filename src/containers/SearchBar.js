import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBarItem from '../components/SearchBar'

class searchBar extends Component {
  initialState = {
    search_text: '',
  }
  state = this.initialState

  changeContent = e => this.setState({ search_text: e.target.value })
  handleEnter = e => {
    if (e.keyCode === 13) this.handleSearch()
  }
  handleSearch = () => {
    console.log('call search API')
  }

  render() {
    return (
      <header>
        <SearchBarItem
          handleEnter={this.handleEnter}
          handleSearch={this.handleSearch}
          onChange={this.changeContent}
        />
      </header>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchBar)
