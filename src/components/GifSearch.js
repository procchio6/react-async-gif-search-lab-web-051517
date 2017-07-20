import React, {Component} from 'react'

class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchField: ''
    }
  }

  updateSearchField = (e) => {
    const searchField = e.target.value
    this.setState({searchField})
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.searchField)
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <div className='form-group'>
          <input type='text' onChange={this.updateSearchField}/>
        </div>
        <div className='form-group'>
          <button
            className='btn btn-default'
            type='submit'>
            Search
          </button>
        </div>
      </form>
    )
  }
}

export default GifSearch
