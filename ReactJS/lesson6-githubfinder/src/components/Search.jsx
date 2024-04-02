import React, { useState } from 'react'

const Search = ({comingkey}) => {
    const [keyword,setKeyword] = useState();
    const formSubmited=(e)=>{
        e.preventDefault();
        if (!keyword) {
            alert("please, enter username!")
        }else{
            comingkey(keyword);
            setKeyword('');
        }
    }
    return (
        <div className='d-flex align-items-center justify-content-center mt-4'>
            <div className="col-4">
                <form onSubmit={formSubmited} className="input-group mb-3">
                    <input value={keyword} onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
                    <button className="btn btn-outline-dark" type="submit" >Search</button>
                </form>

            </div>
        </div>
    )
}

export default Search