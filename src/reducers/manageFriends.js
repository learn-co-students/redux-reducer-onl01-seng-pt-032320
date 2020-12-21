export function manageFriends(state, action){
    switch (action.type) { 
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const cheaper = state.friends.map(friend => friend.id).indexOf(action.id)
            return {...state, friends: [...state.friends.slice(0, cheaper), ...state.friends.slice(cheaper + 1)]}
        default:
            return state
    }
}