import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchForm from '../../components/forms/SearchForm'
import { fetchSearch } from '../../actions/home'
import { NO_RESULTS_FOUND } from '../../utils/contants'
import Images from '../../components/main/Images'

class ImageGrid extends PureComponent {

  handleImageClick = (image) => {
    console.log('image: ', image)

  }

  renderContent = () => {
    const { imagesData, isFetching, error, selectedImageId } = this.props
    let content = null
    if (isFetching) {
      content = 
        <div
          data-test='loader'
        >
          loading
        </div>
    }
    if (!isFetching && imagesData.length === 0) {
      content = <div data-test='noresults'>
        {NO_RESULTS_FOUND}
      </div>
    }
    if (!isFetching && error) {
      content = <div data-test='errorMessage'>
        {error}
      </div>
    }

    if (imagesData.length) {
      const imagesList = imagesData.map(image => (
        <Images
          key={image.id}
          handleImageClick={this.handleImageClick}
          isSelected={selectedImageId === image.id}
        />
      ))
      content = <div
        data-test='imageList'>
        {imagesList}
      </div>
    }
    return content
  }

  render() {
    let content = this.renderContent()
    return (
      <div
        data-test='ImageGrid'
      >
        {
          content
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { home: { queryString, list, isFetching } } = state
  const home = list[queryString] || {}

  return { 
    imagesData: home.data || [],
    error: home.error,
    isFetching,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)

