import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from 'gatsby'
 
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      category:``,
    }
  }
 
  render() {
    return (
      <div>
          <select onChange={this.category} value={this.state.category}>
          <option value="">--Please choose a category--</option>
              <option>Clients</option>
              <option>Marketing</option>
          </select>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {/* {console.log(this.state.results)}
          {console.log(this.search)} */}
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={page.path}>{page.title}</Link>
              {": " + page.category}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)
 
  search = evt => {
    const query = evt.target.value
    const category2 = this.state.category
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search("10", "+Marketing", {
            fields: {
                title: {boost: 2},
                category: {boost: 1},
            }
        })

        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
    console.log(this)
  }

  category = evt => {
    const category = evt.target.value
    // console.log(category)
  this.setState({
    category
  })
      
}

}