import React from 'react'
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const Cart = () => {

    const { isEmpty, items,removeItem,updateItemQuantity,cartTotal } = useCart();
    const deleteAlert =(id)=>{
        swal({
            title: "Are you sure?",
            text: "Your product will delete!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your product has been deleted!", {
                icon: "success",
              });
              removeItem(id)
            } else {
              swal("Your product is safe!");
            }
          });
    }
    return (
        <>
            {isEmpty ? <div className='d-flex justify-content-center align-items-center'><img src="https://silkbooth.com/media/wysiwyg/test/Cart_empty_page.gif" alt="" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1 className='my-5'>Basket</h1>
                <div className="col-9">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item,c) => (
                                <tr>
                                    <th scope="row">{c+1}</th>
                                    <td><img height={100} style={{objectFit:"contain"}} width={100} src={item.images[0]} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price*item.quantity}</td>
                                    <td>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-dark'>-</button>
                                        <span className='mx-3'>{item.quantity}</span>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-dark'>+</button>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={()=>{deleteAlert(item.id)}}>X</button></td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
                <h4>Total price:<span className='text-danger'> ${cartTotal}</span></h4>
            </div>}
        </>
    )
}

export default Cart