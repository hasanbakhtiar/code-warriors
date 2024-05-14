import { supabase } from "../../supabase/supabaseClient";

export const addNews = async ({ title, desc, img }) => {
    const { data, error } = await supabase
    .from('items')
    .insert([{ title, img, desc }])


};

export const deleteNews = async(id) => {
    const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id',id)
};

export const editNews = (id, update) => ({
    type: "EDIT_NEWS",
    id, update
})

export const getNews = (news) => ({
    type: "GET_NEWS",
    news
})