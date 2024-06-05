const SingleCard:React.FC<any> = ({carddata}) => {
  return (
    <div className="col-12 col-sm-12 col-md-11">
      <div className="card">
        <img src={carddata.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{carddata.title}</h5>
        
          <div className="btn btn-primary">
            read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
