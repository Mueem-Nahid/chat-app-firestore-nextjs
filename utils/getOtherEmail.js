const getOtherEmail = (users, currentUser) => {
  return users?.filter(user => user !== currentUser?.email)
}

export default getOtherEmail;