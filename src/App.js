import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchCategories } from './actions/categories';
import { fetchPros } from './actions/pros';

import ProsFilter from './components/ProsFilter';
import ProsTable from './components/ProsTable'
import Paginator from './components/Paginator'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        value: '',
      },
      postcode: '',
    };
    this.onFetchPros = this.onFetchPros.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  async onFetchPros(categoryVal, postcode, offset) {
    const {
      fetchPros,
      listOfPros,
    } = this.props;

    await fetchPros(categoryVal, postcode, offset);
    this.setState({
      category: {
        value: categoryVal,
      },
      postcode,
      listOfPros: listOfPros,
    });
  }

  render() {
    const {
      list_of_pros,
      service_roles,
    } = this.props;
    const {
      category,
      postcode,
    } = this.state;

    return (
      <div className="App">
        <header>
          <p>Your site</p>
        </header>
        <hr/>
        { service_roles.categories &&
          <ProsFilter
            categories={service_roles.categories}
            fetchPros={this.onFetchPros}
          />
        }
        <hr/>
        { list_of_pros.pros &&
          <ProsTable
            listOfPros={!isEmpty(list_of_pros.pros) ? list_of_pros.pros : []}
          />
        }
        { list_of_pros.totalProsCount &&
          <Paginator
            onFetchPros={this.onFetchPros}
            categoryId={category.value}
            postcode={postcode}
            totalProsCount={list_of_pros.totalProsCount}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPros: (categoryName, postcode, offset) => dispatch(fetchPros(categoryName, postcode, offset))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
