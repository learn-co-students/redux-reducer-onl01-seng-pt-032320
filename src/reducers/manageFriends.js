export function manageFriends(state = { 
    friends: [],
 }, action) {
    // let state = {friends: []}
    // let action = {type: "ADD_FRIEND"}
    // let action = {type: "REMOVE_FRIEND"}

    switch (action.type) {

        case 'ADD_FRIEND': 
            return (
                { ...state, 
                        friends: [...state.friends, 
                        action.friend
                    ]
                }
            )

    //When removing a friend, instead of an object, 
    //the action will include an id key with an integer. 
    //Find the friend with the matching id and remove them. 
    //Thought of in another way, the reducer is really returning 
    //a new state with an array of friends that includes everyone 
    //except the removed friend.

    //filter https://stackoverflow.com/questions/41276847/filtering-arrays-in-a-reducer-redux
    //(state, action) => ({
    //   ...state,
    //   messages: state.messages.filter(item => item.id !== action.id)
    // })


        case 'REMOVE_FRIEND': 
            return (
                { ...state, 
                    friends: state.friends.filter(friend => friend.id !== action.id)
                }
            )
        default:
            return state;
    }
}

//let state = {
    // friends: [
    //     {
    //       name: 'Avi',
    //       hometown: 'NYC',
    //       id: 100
    //     }
    //   ],
    // };