export const newsReducer=(state=[],action)=>{
    switch (action.type) {
        case "GET_NEWS":
            return action.news;
        default:
            return state;
    }
}