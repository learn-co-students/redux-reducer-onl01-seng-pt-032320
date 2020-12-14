export function manageFriends(state={friends: []}, action) {
    switch (action.type) {
         case 'ADD_FRIEND':
              state.friends.push(action.friend)
              return { friends: state.friends}
         case 'REMOVE_FRIEND':
              const unremovedFriends = state.friends.filter(friend => friend.id !== action.id)
              return { friends: unremovedFriends }
         default:
              return state
    }
}
