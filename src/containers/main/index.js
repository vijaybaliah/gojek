import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from '../../components/forms/SearchForm'
import { Link } from '../../components/uikit'

class Main extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
}


const mapStateToProps = state => {
    const { home } = state
    return { 
        router: state.router
    }
}

export default connect(mapStateToProps)(Main)

