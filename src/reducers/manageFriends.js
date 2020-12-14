export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return {friend: name.count + 1}
            case "REMOVE_FRIEND":
                return {count: state.count - 1}
                default:
                    return state;
    }
}
