import React, { Component } from 'react'

const styles = {
  Form: {
    width: '50vw',
    margin: '0 auto',
  },
  SearchMain: {
    border: '1px solid black',
  },
}

export default class SearchBar extends Component {
  render() {
    return (
      <div style={styles.Form}>
        <label htmlFor="search_input">Github Repository Search</label>
        <div style={styles.SearchMain}>
          <input
            id="search_input"
            type="text"
            name="search_input"
            placeholder="Search"
            onKeyUp={this.props.handleEnter}
            onChange={this.props.onChange}
          />
          <button
            type="submit"
            name="search_submit"
            onClick={this.props.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}
