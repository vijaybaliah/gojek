import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchForm from '../../components/forms/SearchForm'
import { Link } from '../../components/uikit'
import { fetchSearch } from '../../actions/home'

class Main extends PureComponent {

  handleFetchSearch = (queryString) => {
    this.props.fetchSearch({queryString})
  }
  render() {
    return (
      <div>
        <SearchForm
          handleFetchSearch={this.handleFetchSearch} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { 
    router: state.router
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSearch
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Main)

