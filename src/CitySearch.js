import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined
  };

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter(location => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We can not find the city you are looking for. Please try another city"
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ""
      });
    }
  };

    handleInputChanged = (event) => {
        const value = (event.target.value);
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    };

    this.props.updateEvents(suggestion);
  };

        this.props.updateEvents(suggestion);
    }

    render() {
        const { query, showSuggestions } = this.state;
        return (
            <div className="CitySearch">
                <input
                    type="text"
                    className="city"
                    placeholder="Search here for a city"
                    value={query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                <ul className="suggestions" style={showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b className="all">See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

CitySearch.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateEvents: PropTypes.func.isRequired,
}

export default CitySearch;
