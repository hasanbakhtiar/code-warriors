export const newsReducer=(state=[],action)=>{
    switch (action.type) {
        case "ADD_NEWS":
            return [...state,action.news];
        case "REMOVE_NEWS":
            return state.filter(p=>{
                return p.id !==action.id
            })
        case "EDIT_NEWS":
            return state.map(item=>{
                if (item.id === action.id) {
                    return {
                        ...item,...action.update
                    }
                }else{
                    return item;
                }
            }
                
            )
            case "SET_NEWS":
                return action.news;
        default:
            return state;
    }
}