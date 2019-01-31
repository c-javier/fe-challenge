export const fetchCategories = () => {
  return dispatch => {
    const fetchCategories = 'https://d1i9eedhsgvpdh.cloudfront.net/production-plentific-static/api-cache/find-a-pro/api/v1/categories/all.json';
    const bodyOfCategoriesRequest = {
      method: "GET",
    }

    dispatch(fetchCategoriesInProgress());
    fetch(fetchCategories, bodyOfCategoriesRequest)
      .then(response => response.json())
      .then(categories => dispatch(fetchCategoriesSuccess(categories)))
      .catch(err => dispatch(fetchCategoriesFailure(err)));
  }
}

const fetchCategoriesInProgress = () => ({
  type: 'FETCH_CATEGORIES_IN_PROGRESS',
});

const fetchCategoriesSuccess = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories,
});

const fetchCategoriesFailure = err => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  payload: err,
});
