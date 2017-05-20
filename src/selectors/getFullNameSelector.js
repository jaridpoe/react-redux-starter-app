import {createSelector} from 'reselect'

/*

Reselect selectors can be used to efficiently compute derived data from the Redux store.

 */


const firstName = state => state.profile.firstName
const lastName = state => state.profile.lastName


const getFullName = (firstName, lastName) => {

  const fullName = firstName + ' ' + lastName

  return fullName

}

export default createSelector(
  firstName,
  lastName,
  getFullName
)
