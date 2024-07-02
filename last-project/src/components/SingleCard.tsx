import { useCookies } from "react-cookie";
import supabase from "../config/connect";

const SingleCard: React.FC<any> = ({
  img,
  title,
  responsiveclass,
  price,
  brand,
  alldata,
}) => {
  const [cookie] = useCookies();

  return (
    <div className={responsiveclass}>
      <div className="card">
        <img
          height={300}
          style={{ objectFit: "contain" }}
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{`${
            brand === undefined ? "" : brand
          }  ${title}`}</h5>
          <h6>
            {!price ? "" : "$"}
            {price}
          </h6>
          <div className="btn btn-dark">Read more</div>
          {brand === undefined ? (
            ""
          ) : (
            <button
              onClick={() => {
                const dataSendToBasket = async () => {
                  const { data } = await supabase
                    .from("basket")
                    .select();
                  const finduser = data?.find(
                    (p: any) => p.user_token === cookie["cookie-car"]
                  );
                  if (finduser === undefined) {
                    const { data, error } = await supabase
                      .from("basket")
                      .insert({
                        user_token: cookie["cookie-car"],
                        products: [alldata],
                      });
                    if (error) {
                      console.log(error);
                    } else {
                      console.log(data);
                    }
                  } else {
                    
                    const mydata:any = data?.find(
                      (p: any) => p.user_token === cookie["cookie-car"]
                    );
                    const { error } = await supabase
                      .from("basket")
                      .update({
                        user_token: cookie["cookie-car"],
                        products: [...mydata.products,alldata],
                      })
                      .eq("user_token", cookie["cookie-car"]);
                      if (error) {
                        console.log(error);
                        
                      }
                  }
                };
                dataSendToBasket();
              }}
              className="btn btn-outline-dark ms-2"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
