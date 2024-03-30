import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(1)
  return (
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://cdn.dsmcdn.com/ty1016/product/media/images/prod/SPM/PIM/20231018/09/e70e1f79-069c-3b60-8469-c600c637f3b0/1_org_zoom.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={400} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      {count < 10?"":<h5 className='alert alert-danger'>Stock out</h5>}
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pull and Bear Basic Sport ayakkabi </h1>
      <p className="lead">${count*50}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button className='btn btn-primary' onClick={()=>{
          if (count>1) {
            setCount(count-1)
          }
        }}>-</button>
        <span>{count}</span>
        <button className='btn btn-primary' onClick={()=>{
          if (count<10) {
            setCount(count+1)
          }
        }}>+</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default App