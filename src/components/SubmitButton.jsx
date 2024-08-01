const SubmitButton = ({ text, type }) => {
    return (
      <button className="submit-btn" type={type}>
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">{text}</span>
      </button>
    );
  };
  
  export default SubmitButton;