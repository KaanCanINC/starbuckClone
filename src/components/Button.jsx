const Button = ({ children, variant, className = "" }) => {
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    "primary-outlined": "btn-primary-outlined",
    "secondary-outlined": "btn-secondary-outlined",
  };
  return (
    <button className={`${styles[variant]} ${className}`}>{children}</button>
  );
};

export default Button;
