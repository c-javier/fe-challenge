import { combineReducers } from 'redux';
import categories from '../categories';
import pros from '../pros';

export default combineReducers({
  service_roles: categories,
  list_of_pros: pros,
});
