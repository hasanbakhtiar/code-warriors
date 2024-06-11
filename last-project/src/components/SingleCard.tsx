const SingleCard:React.FC<any> = ({img,title,responsiveclass}) => {
  return (
    <div className={responsiveclass}>
      <div className="card">
        <img height={300}  style={{objectFit:"contain"}} src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        
          <div className="btn btn-primary">
            read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
