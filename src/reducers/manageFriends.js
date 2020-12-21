// state = {friends: []}
// action = {type: "ADD_FRIEND", friend: {name: "Chrome Boi", homewtown: "NYC", id: 1}}
// action = {type: "REMOVE_FRIEND", id: 1}

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    let addFriends = []; Object.assign(addFriends, state.friends); addFriends.push(action.friend);
    return {friends: addFriends}
    case 'REMOVE_FRIEND':
    return {friends: state.friends.filter(friend => friend.id !== action.id) }
    default:
    return state;
  }
}

