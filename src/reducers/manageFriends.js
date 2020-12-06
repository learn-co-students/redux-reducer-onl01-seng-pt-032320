// export function manageFriends(state, action){
// }


export function manageFriends(state={friends: []}, action){
  switch (action.type) {
      case "ADD_FRIEND" :
          return {friends: [...state.friends, action.friend]}
      case "REMOVE_FRIEND" :
          const removeFriend = state.friends.findIndex( f => f.id === action.id );
          const newArr = [...state.friends]
          newArr.splice(removeFriend, 1);
          return {friends: newArr}
      default:
          return state;
  }
}

//   If the reducer receives a type set to "INCREASE", 
//return a new state where the value of numberOfPresents is increased by one.
// Use the tests to guide you as you build out this reducer.

// In manageFriends.js, write a function called manageFriends
// that takes in the previous state and an action as its argument. 
//Here, the initial state should be an object with a key, friends, 
//set to an empty array.
// This time, the reducer should be able to handle two actions, 
//"ADD_FRIEND" and "REMOVE_FRIEND". When adding a friend, the action 
//will include a friend key assigned to an object with name, hometown, and id keys.
// When our reducer receives "ADD_FRIEND", it should return 
//a new state with this friend object added to the friends array.

// When removing a friend, instead of an object, the action 
//will include an id key with an integer. 
//Find the friend with the matching id and remove them. 
//Thought of in another way, the reducer is really returning
// a new state with an array of friends that includes everyone except 
//the removed friend.
// Both reducers should be pure functions. This means that the
// functions cannot change any object defined outside of the functions.
// It also means that given an input, the reducers will always return the same output.


