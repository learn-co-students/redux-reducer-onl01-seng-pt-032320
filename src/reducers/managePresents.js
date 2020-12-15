export function managePresents(state = {
    numberOfPresents: 0,}, action) {
    // let state = {numberOfPresents: 0}
    // let action = {type: "INCREASE"}

    switch(action.type) {
        case 'INCREASE':

        // using object.assign
            // return Object.assign({}, state, {
            //     numberOfPresents: state.numberOfPresents + 1
            // });

        //using spread operator
            return { ...state, numberOfPresents: state.numberOfPresents + 1}

        default:
            return state;
    }
}

// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// let olderDog = {...dog, age: dog.age + 1}
//"Return a new object that contains all the key-value pairs 
    //from dog copied over with the age key overwritten with a new value".