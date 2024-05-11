export const addNews = ({title,desc,img})=>({
        type:"ADD_NEWS",
        news:{
            id:crypto.randomUUID(),
            img,
            title,
            desc
        }
});

export const deleteNews = ({id})=>({
    type:"REMOVE_NEWS",
    id
});

export const editNews =(id,update)=>({
    type:"EDIT_NEWS",
    id,update
})