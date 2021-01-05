let state = {friends: []}

export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state, friends: [...state.friends, action.friend]}
                )
        case "REMOVE_FRIEND":
            let filter = state.friends.filter(friend => friend.id !==action.id)
            return {...state, friends: filter}
        default:
            return state
    }
}