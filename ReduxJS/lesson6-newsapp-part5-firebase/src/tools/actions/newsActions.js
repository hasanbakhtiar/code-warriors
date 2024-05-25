


import database from '../../firebase/firebaseConfig';

export const addNews = (news) => ({
    type: "ADD_NEWS",
    news
})

export const addNewsToDatabase = (newsData = {}) => {
    return (dispatch) => {
        const { title='', desc='', img='' } = newsData;
        const newss = {img,title,desc};

        database.ref("news").push(newss).then((res) => {
            dispatch(addNews({
                id: res.key,
                ...newss
            }))
        })
    }
}

export const removeNews = (id) => ({
    type: "REMOVE_NEWS",
    id: id
});

export const removeNewsFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`news/${id}`).remove().then(() => {
            dispatch(removeNews(id));
        })
    }   
}

export const editNews = (id,updates) => ({
    type: "EDIT_NEWS",
    id,
    updates
})

export const editNewsFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`news/${id}`).update(updates).then(() => {
            dispatch(editNews(id,updates));
        })
    }
}

export const setNews = (news) => ({
    type: "SET_NEWS",
    news
})

export const getNewsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("news").once("value").then((snapshot) => {
            const newss = [];

            snapshot.forEach((news) => {
                newss.push({
                    id: news.key,
                    ...news.val()
                })
            })

            dispatch(setNews(newss));
        })
    }
}