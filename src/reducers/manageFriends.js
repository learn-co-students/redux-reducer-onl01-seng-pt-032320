export function manageFriends(state = {friends: [] }, action){

    switch (action.type) {
        case 'ADD_FRIEND':
          return ({...state, friends: [...state.friends, action.friend]})

        case 'REMOVE_FRIEND':
            const index = state.friends.findIndex(n => n.id === action.id)

            return ({...state, friends: [                 //initial array = arr=[0,1,2] ...... 
                        ...state.friends.slice(0, index), //returns [0 - index] but not including index -> only return arr[0]
                        ...state.friends.slice(index + 1) //returns [index + 1] -> arr[2, 3, 4, etc.]
                        // so then you get two arrays without arr[1]
            
            ] 
            })

        default:
          return state;
      }

}
