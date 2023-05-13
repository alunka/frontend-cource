import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div
        className="alert alert-warning text-center"
        style={{ margin: "30px" }}
        role="alert"
      >
        Page Not Found <br />
        404
      </div>
    </>
  );
};

export default NotFound;
