export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
        let addFriend =  Object.assign({},state.friends, {name: 'Chrome Boi', hometown: 'NYC', id: 1})
          return addFriend
        case 'REMOVE_FRIEND':
            let findFriend = state.friends.filter(f=> f.id !== action.id)
            let updateFriends = Object.assign({}, state.friends, {findFriend})
          return updateFriends
        default:
          return state;
      }

}

