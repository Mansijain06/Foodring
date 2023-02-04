const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div className="shimmer-block" key={index}>
            <div className="shimmer-img-block"></div>
            <div className="shimmer-text-block">
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
