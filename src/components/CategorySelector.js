import React, { Component } from 'react';
import { find } from 'lodash';

class CategorySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: 'Select a category',
      value: '',
    };
  }

  onCategorySelectionChange = e => {
    e.preventDefault();
    const selectedCategory = find(e.target.options, 'selected');
    const { text, value } = selectedCategory;

    this.setState({
      categoryName: text,
      value,
    });
    this.props.onUpdateCategory(text, value);
  }

  renderOption = (option, index) => {
    if (index === 0) {
    return <option key={index} value={this.state.value}>{this.state.categoryName}</option>;
    }
    if (!option.hidden) {
      return <option key={index} value={option.id}>{option.name}</option>;
    }
  };

  render() {
    const options = this.props.categories.map(this.renderOption);

    return (
      <label>
      Category:
        <select onChange={this.onCategorySelectionChange} value={this.state.value}>
            { options }
        </select>
      </label>
    );
  }
}

export default CategorySelector;
