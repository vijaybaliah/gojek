import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchForm from '../../components/forms/SearchForm'
import Theme from '../../components/main/Theme'
import { fetchSearch } from '../../actions/home'
import ImageGrid from './ImageGrid'
import tokens from '../../utils/tokens'

class Main extends PureComponent {

  handleFetchSearch = (queryString) => {
    this.props.fetchSearch({queryString})
  }

  handleOnThemeChange = (theme) => {
    const root = document.documentElement;
    Object.keys(tokens[theme]).forEach(key => {
      root.style.setProperty('--'+key, tokens[theme][key]);
    })
  }

  render() {
    return (
      <div>
        <Theme
          tokens={tokens}
          onThemeChange={this.handleOnThemeChange}
        />
        <SearchForm
          handleFetchSearch={this.handleFetchSearch} />
        <ImageGrid
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

