export function managePresents(state, action){
    switch (action.type) {
        case 'INCREASE':
          return {numberofPresents: state.numberofPresents + 1}
        default:
          return state;
      }

}

let state = { numberofPresents: 0 }
