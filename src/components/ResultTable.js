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
  resultItem = (item, keyNumber) => (
    <tr key={keyNumber}>
      <td style={styles.tableCell}>{keyNumber + 1}</td>
      <td style={styles.tableCell}>{item.RepositoryName}</td>
      <td style={styles.tableCell}>{item.OwnerName}</td>
      <td style={styles.tableCell}>{item.CreatedDate}</td>
      <td style={styles.tableCell}>{item.UpdatedDate}</td>
      <td style={styles.tableCell}>{item.StarCount}</td>
      <td style={styles.tableCell}>{item.Watchers}</td>
    </tr>
  )
  render() {
    const { searchResultList } = this.props
    if (searchResultList.length === 0) return null
    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableCell}>No</th>
            <th style={styles.tableCell}>Repository Name</th>
            <th style={styles.tableCell}>Owner Name</th>
            <th style={styles.tableCell}>Created Date</th>
            <th style={styles.tableCell}>Updated Date</th>
            <th style={styles.tableCell}>Star Count</th>
            <th style={styles.tableCell}>Watchers</th>
          </tr>
        </thead>
        <tbody>
          {searchResultList.map((item, key) => {
            return this.resultItem(item, key)
          })}
        </tbody>
      </table>
    )
  }
}
