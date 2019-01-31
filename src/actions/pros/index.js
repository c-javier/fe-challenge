import { toLower, toNumber, toString } from 'lodash';

export const fetchPros = (categoryId, postcode, offset) => {
  return dispatch => {
    const fetchProsEndpoint = 'https://demo.plentific.com/find-a-pro/api/v2/public/pro/search-pros/';
    const requiredBodyAttrForRequest = {
      category_id: toNumber(categoryId),
      location: toLower(postcode),
    };
    const bodyOfProsRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-pagination-offset': toString(offset),
        'x-pagination-limit': '20',
      },
      body: JSON.stringify(requiredBodyAttrForRequest), // body data type must match "Content-Type" header
    };

    dispatch(fetchProsInProgress());
    fetch(fetchProsEndpoint, bodyOfProsRequest)
      .then(response => {
        dispatch(prosCountTotal(response.headers.get('x-pagination-count')));
        return response.json();
      })
      .then(pros => dispatch(fetchProsSuccess(pros)))
      .catch(err => dispatch(fetchProsFailure(err)));
  }
}

const fetchProsInProgress = () => ({
  type: 'FETCH_PROS_IN_PROGRESS',
  payload: [],
});

const fetchProsSuccess = pros => ({
  type: 'FETCH_PROS_SUCCESS',
  payload: pros,
});

const fetchProsFailure = err => ({
  type: 'FETCH_PROS_FAILURE',
  payload: err,
});

const prosCountTotal = totalProsCount => ({
  type: 'FETCH_PROS_TOTAL_COUNT_SUCCESS',
  payload: totalProsCount,
});
