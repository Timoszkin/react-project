import { User } from "../types/User";

const getUserList = () => {
  const userListString: string = localStorage.getItem('user') || '[]';
  return JSON.parse(userListString)
}

const addFavLocalStore = (currentUserID: number, movieName: string) => {
  const userList: User[] = getUserList()
  const newUserList = userList.map(el => {
    if (el.id === currentUserID) {
      if (!el.favorites) {
        el.favorites = [movieName]
      } else {
        el.favorites = [...el.favorites, movieName]
      }
    }
    return el;
  })
  const newUserListStringified = JSON.stringify(newUserList)
  localStorage.setItem('user', newUserListStringified)
}

const removeFavLocalStore = (currentUserID: number, movieName: string) => {
  const userList: User[] = getUserList()
  const newUserList = userList.map(el => {
    if (el.id === currentUserID) {
      if (!el.favorites) {
        el.favorites = []
      } else {
        el.favorites = [...el.favorites.filter(movie => movie !== movieName)]
      }
    }
    return el;
  })
  const newUserListStringified = JSON.stringify(newUserList)
  localStorage.setItem('user', newUserListStringified)
}

export { removeFavLocalStore, addFavLocalStore }