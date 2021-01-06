export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newFriend = action.friend
            return {...state, friends: [...state.friends, newFriend] }

        case 'REMOVE_FRIEND':
            return { ...state, friends: state.friends.filter(friend => friend.id != action.id) }

        default:
            return state
    }
}
