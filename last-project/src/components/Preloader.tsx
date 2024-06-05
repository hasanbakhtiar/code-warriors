import CircleLoader from "react-spinners/CircleLoader";
const Preloader = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <CircleLoader color="#000000" loading size={400} />
    </div>
  );
};

export default Preloader;
