import React from 'react'
import { range } from '../utils/helpers'
import PropTypes from 'prop-types'
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'
import styles from '../cssmods/Common.css'

const propTypes = {
  currentPage: PropTypes.number,
  totalSize: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  sizes: PropTypes.array,
  showSize: PropTypes.bool
}

const defaultProps = {
  currentPage: 1,
  showSize: true,
  sizePerPage: 10,
  sizes: range(0, 10).map(size => (size + 1) * 10)
}

class Pagination extends React.Component {
    
  updatePage = (page) => {
    const totalPages = Math.ceil(this.props.totalSize/this.props.sizePerPage)
    const sizePerPage = this.props.sizePerPage
    if (page > 0 && page <= totalPages) {
      this.props.onChange(page, {sizePerPage: sizePerPage})
    }
  }

  onPageChange = (e) => {
    this.updatePage(parseInt(e.target.value, 10))
  }

  onSizeChange = (e) => {
    const value = parseInt(e.target.value, 10)
    this.props.onChange(1, {sizePerPage: value})
  }

  render () {
    const totalPages = Math.ceil(this.props.totalSize/this.props.sizePerPage)
    const pages = range(1, totalPages + 1).map(page => page)

    const start = (this.props.currentPage - 1) * this.props.sizePerPage + 1
    const end = this.props.totalSize < (start + this.props.sizePerPage - 1)? this.props.totalSize: (start + this.props.sizePerPage - 1)
    return (
      <div 
        data-test='Pagination'
        className={[styles.flex, styles.middle, styles.pagination].join(' ')}
      >
        {
          this.props.showSize ? (
            <div className={[styles.showSize, styles.flex, styles.middle].join(' ')}>
              <span>Rows per page:</span>
              <div className={styles.dropdownContainer}>
                <select
                  className={styles.customSelectTag}
                  value={this.props.sizePerPage}
                  onChange={this.onSizeChange}>
                  {
                    this.props.sizes.map((sizeList) => {
                      return (
                        <option value={sizeList} key={sizeList}>{sizeList}</option>
                      )
                    })
                  }
                </select>
                <div className={styles.selectTagPointer}>
                </div>
              </div> 
              <span className={styles.sizeLabel}>
                {`${start} to ${end}`}
              </span>
              <span>{`of ${this.props.totalSize}`}</span>
            </div>
          ): null
        }
        <span
          data-test='leftArrow'
          className={styles.paginationArrow}
          onClick={() => this.updatePage(this.props.currentPage - 1)}>
            <ChevronLeft width={16} height={16} />
        </span>
        <select
          data-test='selectPage'
          className={[styles.customSelectTag, styles.selectPage].join(' ')}
          value={this.props.currentPage}
          onChange={this.onPageChange}
        >
          {
            pages.map((pageList) => {
              return (
                <option value={pageList} key={pageList}>{pageList}</option>
              )
            })
          }
        </select>
        <span
          data-test='rightArrow'
          className={styles.paginationArrow}
          onClick={() => this.updatePage(this.props.currentPage + 1)}>
            <ChevronRight width={16} height={16} />
        </span>
      </div>
    )
  }
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination