const SingleCard:React.FC<any> = ({img,title,responsiveclass,price,brand}) => {
  return (
    <div className={responsiveclass}>
      <div className="card">
        <img height={300}  style={{objectFit:"contain"}} src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${brand===undefined?"":brand}  ${title}`}</h5>
          <h6>{!price?"":"$"}{price}</h6>
          <div className="btn btn-dark">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
