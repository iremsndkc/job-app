const AutoInput = ({ label, name }) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input type="text" required id={label} name={name} />
      </div>
    );
  };
  
  export default AutoInput;
