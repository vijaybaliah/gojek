import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormInput } from './FormElements'
import { LIMIT, OFFSET, RATING, LANG } from '../../utils/contants'
import qstring from 'query-string'
import { fetchSearch } from '../../actions/home'
import Search from '../../icons/Search'
import styles from '../../cssmods/Search.css'
import commonStyles from '../../cssmods/Common.css'
import { required } from '../../utils/validations'

export class SearchForm extends PureComponent {

    // static propTypes = {
    // }

  onSubmit = (values) => {
    const queryParams = {
      q: values.q,
      limit: LIMIT,
      offset: OFFSET,
      rating: RATING,
      lang: LANG
    }
    const queryString = qstring.stringify(queryParams)
    this.props.handleFetchSearch(queryString)
  }

  render() {
    const {  handleSubmit } = this.props

    return (
      <div className={styles.search} data-test='SearchForm'>
        <form id='search' onSubmit={handleSubmit(this.onSubmit)} className={styles.searchForm}>
          <Field
            name='q'
            placeholder='Search your gif here'
            component={FormInput} />
          <div>
            <button
              className={commonStyles.primaryBtn} type='submit'
              data-test='searchSubmitBtn'
            >
                <Search width={16} height={16} fill={'#ffffff'} />
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


var Form = reduxForm({
  form: 'search',
  getFormState: state => state.form,
})(SearchForm)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSearch
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Form)
