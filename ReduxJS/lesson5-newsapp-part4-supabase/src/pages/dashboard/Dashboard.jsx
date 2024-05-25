import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteNews } from '../../tools/actions/newsActions';
import slugify from 'slugify';

const Dashboard = () => {
    const data = useSelector(p => p);
    const dispatch = useDispatch();
    return (
        <Container>
            <h1 className='text-center my-5'>Dashboard</h1>
            <div className="d-flex align-items-start justify-content-center flex-column">
                <Link to="/dashboard/add" className='btn btn-dark my-3'>Add</Link>
                <Col sm={12}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        {data.length === 0 ? <div style={{ width: "71%",position:"absolute"}} className='alert alert-warning d-flex justify-content-center my-1'>No news</div> :
                            <tbody>
                                {data.map((item, c) => (
                                    <tr>
                                        <th scope="row">{c + 1}</th>
                                        <td><img width={70} src={item.img} alt={item.title} /></td>
                                        <td>{item.title.slice(0, 10)}...</td>
                                        <td>{item.desc.slice(0, 20)}...</td>
                                        <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></td>
                                        <td><button onClick={() => { dispatch(deleteNews( item.id )) }} className='btn btn-danger'>Del</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        }

                    </table>

                </Col>

            </div>
        </Container>
    )
}

export default Dashboard