export function manageFriends(state, action) {
  switch(action.type){
    case 'friends/add':
      return {...state, friends: [...state.friends, action.payload]}
    case 'friends/remove': 
      return {...state, friends: state.friends.filter(friend => action.payload.name === friend.name)}
    default:
      return state
  }
}
