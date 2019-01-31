export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROS_IN_PROGRESS':
      return {
        ...state,
        pros: action.payload,
      }
    case 'FETCH_PROS_TOTAL_COUNT_SUCCESS':
      return {
        ...state,
        totalProsCount: action.payload,
      }
    case 'FETCH_PROS_SUCCESS':
      return {
        ...state,
        pros: action.payload.response.pros,
      }
    case 'FETCH_PROS_FAILURE':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}