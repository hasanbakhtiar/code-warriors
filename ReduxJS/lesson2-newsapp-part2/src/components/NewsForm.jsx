import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../tools/actions/newsActions';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const NewsForm = () => {
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const dispatch = useDispatch();
    const data = useSelector(p=>p);
    const navigate = useNavigate();
    const formSubmit =(e)=>{
        e.preventDefault();
        dispatch(addNews({img:imgRef.current.value,title:titleRef.current.value,desc:descRef.current.value}))
        swal("News added","","success")
        setTimeout(()=>{
            navigate('/news')
        },1500)
    }
    
    
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={6}>
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Photo link</label>
                        <input ref={imgRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input ref={descRef} type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-info">Add News</button>
                    
                </form>
            </Col>
        </div>

    )
}

export default NewsForm