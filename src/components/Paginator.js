import React, { Component } from 'react';
import { toNumber, times } from 'lodash';

const getPageCountForTwentyProsPerPage = totalProsCount => Math.ceil(toNumber(totalProsCount) / 20);

class Paginator extends Component {
  generatePaginationLinks = () => {
    const {
    onFetchPros,
    categoryId,
    postcode,
    totalProsCount,
    } = this.props;
    const numOfPages = getPageCountForTwentyProsPerPage(totalProsCount);

    return times(numOfPages, (page) => {
      return (<button key={page} onClick={() => onFetchPros(categoryId, postcode, page)}>{page + 1}</button>);
    });
  };

  render() {
    const {
    onFetchPros,
    categoryId,
    postcode,
    totalProsCount,
    } = this.props;
    const numOfPages = getPageCountForTwentyProsPerPage(totalProsCount);
    const indexOflastPage = numOfPages < 20 ? 0 : numOfPages;

    return (
      <div className="pagination">
        <button onClick={() => onFetchPros(categoryId, postcode, 0)}>&#171;</button>
        { this.generatePaginationLinks() }
        <button onClick={() => onFetchPros(categoryId, postcode, indexOflastPage)}>&#187;</button>
      </div>
    );
  }
}

export default Paginator;
