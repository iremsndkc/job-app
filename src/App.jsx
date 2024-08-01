import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import { useDispatch } from "react-redux";
import api from "./utils/api";
import { useEffect } from "react";
import { setError, setJobs, setLoading } from "./app/slices/jobSlice";

function App() {
  const dispatch = useDispatch();

  const getJobs = () => {
    //* loading durumunu çalıştır
    dispatch(setLoading());

    api
      .get("23456/jobs")
      //* istek başarılı olursa slice içerisindeki state i güncellemek için setJobs aksiyonunu çalıştır ve payloadına veriyi gönder
      .then((res) => dispatch(setJobs(res.data)))
      //* istek başarısız olursa state içerisinde ki error değerini güncellemek için setErorr aksiyonunu çalıştır ve payloadına veriyi gönder
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList retry={getJobs} />} />
        <Route path="/new" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;