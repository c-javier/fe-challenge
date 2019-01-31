export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload,
      }
    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
