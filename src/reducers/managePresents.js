export function managePresents(state = 0, action){
    switch (action.type) {
        case 'INCREASE':
          return {numberOfPresents: state.numberOfPresents + 1}
        default:
          return state;
    }
}
