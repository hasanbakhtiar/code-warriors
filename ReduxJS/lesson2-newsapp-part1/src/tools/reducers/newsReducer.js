export const newsReducer=(state=[],action)=>{
    switch (action.type) {
        case "ADD_NEWS":
            return action.news;
    
        default:
            return state;
    }
}