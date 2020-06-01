import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLocation } from '../../actions/weather';
import SearchView from './SearchView';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: this.props.query };
  }

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim()) {
      this.props.search(query);
    }
  };

  render() {
    const viewProps = {
      query: this.state.query,
      onSubmit: this.onSubmit,
      onInputChange: this.onInputChange
    };

    return <SearchView {...viewProps} />;
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired
};

const mapStateToProps = ({ weather }) => ({
  query: weather.query
});

const mapDispatchToProps = {
  search: searchLocation
};

Search.displayName = 'Search';
export { Search as BaseSearch };
export default connect(mapStateToProps, mapDispatchToProps)(Search);
