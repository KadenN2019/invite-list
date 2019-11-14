import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const GOING = "users/GOING"
const NOT_GOING = "users/NOTGOING"

// initial state
const initialState = {
  users:{
      name: {
        first: '',
        last: '',
      },
      picture: {
        medium: ''
      },
      phone: '',
      email: ''
  },
  going: [],
  notGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case GOING:
      return { ...state, going: action.payload}
    case NOT_GOING:
        return { ...state, notGoing: action.payload}
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results[0]
      })
    })
  }
}
//GET REQUESTS
const getGoing = () => {
  return dispatch => {
    axios.get('/users/going').then(resp =>{
      dispatch({
        type: GOING,
        payload: resp.data
      })
    })
  }
}

const getNotGoing = () => {
  return dispatch => {
    axios.get('/users/going').then(resp =>{
      dispatch({
        type: NOT_GOING,
        payload: resp.data
      })
    })
  }
}
//POST REQUESTS
const userGoing = (user) => {
  return dispatch => {
    axios.post('/users/going', {user}).then(resp =>{
      dispatch(getGoing())
      dispatch(getUsers())
    })
  }
}

const userNotGoing = (user) => {
  return dispatch => {
    axios.post('/users/going', {user}).then(resp =>{
      dispatch(getNotGoing())
      dispatch(getUsers())
    })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()
  const going = useSelector(appState => appState.userState.going)
  const notGoing = useSelector(appState => appState.userState.notGoing)

  const isGoing = user => dispatch(userGoing(user))
  const isNotGoing = user => dispatch(userNotGoing(user))

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return { users, isGoing, isNotGoing, going, notGoing }
}
