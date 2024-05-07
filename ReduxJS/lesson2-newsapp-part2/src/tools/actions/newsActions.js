export const addNews = ({title,desc,img})=>({
        type:"ADD_NEWS",
        news:{
            id:crypto.randomUUID(),
            img,
            title,
            desc
        }
});