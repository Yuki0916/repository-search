import React, { Component } from 'react'

const styles = {
  table: {
    margin: '20px auto',
  },
  tableCell: {
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
  },
}

export default class ResultTable extends Component {
  resultHead = () => {
    const { sortTable } = this.props
    return (
      <thead>
        <tr>
          <th style={styles.tableCell}>No</th>
          <th
            style={styles.tableCell}
            onClick={() => sortTable('RepositoryName')}
          >
            Repository Name
          </th>
          <th style={styles.tableCell} onClick={() => sortTable('OwnerName')}>
            Owner Name
          </th>
          <th style={styles.tableCell} onClick={() => sortTable('CreatedDate')}>
            Created Date
          </th>
          <th style={styles.tableCell} onClick={() => sortTable('UpdatedDate')}>
            Updated Date
          </th>
          <th style={styles.tableCell} onClick={() => sortTable('StarCount')}>
            Star Count
          </th>
          <th style={styles.tableCell} onClick={() => sortTable('Watchers')}>
            Watchers
          </th>
        </tr>
      </thead>
    )
  }
  resultItem = (item, keyNumber) => {
    const { getRepositoryInfo } = this.props
    return (
      <tr
        key={keyNumber}
        onClick={() => getRepositoryInfo(item.RepositoryName, item.OwnerName)}
      >
        <td style={styles.tableCell}>{keyNumber + 1}</td>
        <td style={styles.tableCell}>{item.RepositoryName}</td>
        <td style={styles.tableCell}>{item.OwnerName}</td>
        <td style={styles.tableCell}>{item.CreatedDate}</td>
        <td style={styles.tableCell}>{item.UpdatedDate}</td>
        <td style={styles.tableCell}>{item.StarCount}</td>
        <td style={styles.tableCell}>{item.Watchers}</td>
      </tr>
    )
  }
  render() {
    const { searchResultList } = this.props
    if (searchResultList.length === 0) return null
    return (
      <table style={styles.table}>
        {this.resultHead()}
        <tbody>
          {searchResultList.map((item, key) => {
            return this.resultItem(item, key)
          })}
        </tbody>
      </table>
    )
  }
}
