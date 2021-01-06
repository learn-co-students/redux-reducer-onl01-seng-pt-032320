export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newFriend = {
                name: state.name,
                hometown: state.hometown,
                id: state.id
                }
            return {newFriend}

        case 'REMOVE_FRIEND':
            return state.map(thing => thing.id != action.id)

        default:
            return state
    }
}
