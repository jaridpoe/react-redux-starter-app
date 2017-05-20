import {createSelector} from 'reselect'

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
