import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'
import { updateNavigation, updateImageClick } from '../../actions/home'
import { NO_RESULTS_FOUND, RATING, LANG } from '../../utils/contants'
import Images from '../../components/main/Images'
import Pagination from '../../components/Pagination'
import Spinner from '../../components/Spinner'
import qstring from 'query-string'
import styles from '../../cssmods/Main.css'
import { isEmpty } from '../../utils/validations'

class ImageGrid extends PureComponent {

  handleImageClick = (selectedImageId) => {
    this.props.updateImageClick({ selectedImageId })
  }

  handleNavigation = (start, { sizePerPage }) => {
    const queryParams = {
      q: this.props.q,
      limit: sizePerPage,
      offset: (start - 1) * sizePerPage,
      rating: RATING,
      lang: LANG
    }
    
    const queryString = qstring.stringify(queryParams)
    this.props.handleFetchSearch(queryString)
    this.props.updateNavigation({start, sizePerPage})
  }

  renderContent = () => {
    const { imagesData, isFetching, error, selectedImageId, isLoading, start, sizePerPage, pagination, q, queryString } = this.props
    let content = null
    if (isFetching) {
      content = 
        <div
          data-test='loader'
          className={styles.isFetching}
        >
          <Spinner />
        </div>
    }
    if (imagesData.length === 0 && !isLoading && !isEmpty(q) &&queryString.includes('q')) {
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
          id={image.id}
          title={image.title}
          imageData={image.images}
          handleImageClick={this.handleImageClick}
          isSelected={selectedImageId === image.id}
        />
      ))
      content = <div
        className={styles.imageList}
        data-test='imageList'>
          {imagesList}
          <div className={styles.paginationContainer}>
            <Pagination
              currentPage={start}
              totalSize={pagination.total_count}
              sizePerPage={sizePerPage}
              onChange={this.handleNavigation}
              sizes={[20,50,100]}
              showSize={window.innerWidth > 600}/>
          </div>
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
  const { home: { list, queryString, ...rest } } = state
  const home = list[queryString] || {}
  const pagination = {
    total_count: 0,
    count: 0,
    offset: 0,
  }
  const selector = formValueSelector('searchForm', state => state.form)
  return { 
    imagesData: home.data || [],
    pagination: home.pagination || pagination,
    error: home.error,
    q: selector(state, 'q'),
    queryString,
    ...rest
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateNavigation,
      updateImageClick,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid)

