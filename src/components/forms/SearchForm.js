import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormInput } from './FormElements'
import { LIMIT, OFFSET, RATING, LANG } from '../../utils/contants'
import qstring from 'query-string'
import { fetchSearch } from '../../actions/home'
import Search from '../../icons/Search'

class SearchForm extends Component {

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
        this.props.fetchSearch({queryString})
    }

    render() {
        const {  handleSubmit } = this.props

        return (
            <div className={'search-form'}>
                <form id='search' onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name='q'
                        placeholder='Search your gif here'
                        component={FormInput} />
                    <button>
                        <Search width={24} height={24} />
                    </button>
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
