import ErrorLogo from "../assets/img/errorLogo.png";

const ErrorComponent = () => {
  return (
    <div>
      <img src={ErrorLogo} alg="error" />
      <h2>Oops! Something went wrong!</h2>
    </div>
  );
};

export default ErrorComponent;
