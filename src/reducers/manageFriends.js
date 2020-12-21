export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
        let newFriend = {...state.friends, name: 'Chrome Boi', hometown: 'NYC', id: 1}
          return newFriend
        case 'REMOVE_FRIEND':
          return 
        default:
          return state;
      }

}

let state = { friends: [] }
