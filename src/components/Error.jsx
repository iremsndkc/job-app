const Error = () => { ({ message, retry }) => {
    return (
      <div className="error">
        <p>Üzgünüz verilere erişirken bir hata oluştu</p>
        <p className="text">{message}</p>
    
        <button onClick={retry} className="button">
          <span>Tekrar Dene</span>
        </button>
      </div>
    );
  }; 
}
 
export default Error;
