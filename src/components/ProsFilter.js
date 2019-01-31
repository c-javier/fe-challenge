import React, { Component } from 'react';
import CategorySelector from './CategorySelector';
import PostalCodeInput from './PostalCodeInput'

class ProsFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        name: '',
        value: '',
      },
      postcode: '',
    };
  }

  onClick = () => {
    const {
      category,
      postcode,
    } = this.state;

    this.props.fetchPros(category.value, postcode, 0);
  }

  onUpdateCategory = (name, value) => {
    this.setState({
      category: {
        name,
        value,
      },
    });
  }

  onUpdatePostCode = postcode => {
    this.setState({ postcode });
  }

  render() {
    return (
      <div className="pros-filter">
        <CategorySelector
          categories={this.props.categories}
          onUpdateCategory={this.onUpdateCategory}
        />
        <PostalCodeInput onUpdatePostCode={this.onUpdatePostCode} />
        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

export default ProsFilter;
