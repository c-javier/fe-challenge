import React, { Component } from 'react';
import { times } from 'lodash';

const COLUMN_TYPES = ['Id', 'Name', 'Postcode', 'Review Rating'];

class ProsTable extends Component {
  getStarRating = rating => {
    const filledStars = times(rating, (n) => <section className="star-rating black-star" key={rating + n}>&#9733;</section>);
    const blankStars = times(5 - rating, (n) => <section className="star-rating" key={5 - rating + n}>&#9734;</section>);
    const starMap = filledStars.concat(blankStars);

    return starMap; 
  }

  renderTableHeaders = () => COLUMN_TYPES.map((type, index) => <td className="table-header" key={index}>{type}</td>);

  renderPros = () =>
    this.props.listOfPros.map((pro, index) => {
      const {
        id,
        name,
        main_address,
        review_rating,
      } = pro;
      const starRating = this.getStarRating(review_rating);

      return (
        <tr
          className={!(index % 2) ? 'pro-tr-grey' : undefined}
          key={index + 1}
        >
            <td className="pro-td" key={`${index + 2}`}>{id}</td>
            <td className="pro-td" key={`${index + 3}`}>{name}</td>
            <td className="pro-td" key={`${index + 4}`}>{main_address.postcode}</td>
            <td className="pro-td" key={`${index + 5}`}>{starRating}</td>
        </tr>
      );
    }
  );

  render() {
    return (
      <table>
        <tbody>
            <tr>
                { this.renderTableHeaders() }
            </tr>
            { this.renderPros() }
        </tbody>
      </table>
    );
  }
}

export default ProsTable;
