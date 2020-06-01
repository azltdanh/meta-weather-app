import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SearchView = ({ query, onSubmit, onInputChange }) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>City:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          placeholder="Enter a City"
          value={query}
          onChange={onInputChange}
        />
        <InputGroup.Append>
          <Button type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  </Form>
);

SearchView.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

SearchView.displayName = 'SearchView';
export default SearchView;
