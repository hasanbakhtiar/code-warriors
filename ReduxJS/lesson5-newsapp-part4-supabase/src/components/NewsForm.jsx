import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import swal from 'sweetalert';

const NewsForm = ({formData,editdata}) => {
    const [img,setImg] = useState(editdata?editdata.img:"");
    const [title,setTitle] = useState(editdata?editdata.title:"");
    const [desc,setDesc] = useState(editdata?editdata.desc:"");
    const formSubmit =(e)=>{
        e.preventDefault();
        formData({
            img,
            title,
            desc
        })
        
    }
    
    
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={6}>
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Photo link</label>
                        <input value={img} onChange={e=>setImg(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea  onChange={e=>setDesc(e.target.value)} type="text" className="form-control" style={{height:"200px"}}>{desc}</textarea>
                    </div>
                    <button type="submit" className="btn btn-info">{editdata?"Edit ":"Add News"}</button>
                    
                </form>
            </Col>
        </div>

    )
}

export default NewsForm