import { useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../constants";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "../app/slices/jobSlice";
import api from "../utils/api";
const Filter = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [debouncedText, setDebouncedText] = useState();


  useEffect(() => {
    if(text === undefined) return
    // bir sayaç başlat ve işlemi sayaç durunca yap.
    const timer = setTimeout(() => setDebouncedText(text),500);
    // eğerki süre bitmeden tekrar useEffect çalışırsa (yeni sayaç başlamamsı) önceki sayacı iptal et.
    return () => {
      clearTimeout(timer);
    }
  
  },[text])

  useEffect(() => {
    const sortParam =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "En Yeni" || sort === "En Eski"
        ? "date"
        : undefined;

    const orderParam =
      sort === "a-z"
        ? "asc"
        : sort === "z-a"
        ? "desc"
        : sort === "En Yeni"
        ? "desc"
        : sort === "En Eski"
        ? "asc"
        : undefined;

    const params = {
      q: text,
      _sort: sortParam,
      _order: orderParam,
      type: type || undefined,
      status: status || undefined,
    };
  dispatch(setLoading());

  api
  .get("/jobs",{params})
  .then((res) => dispatch(setJobs(res.data)))
  .catch((err) => dispatch(setError(err.message)));
 }, [debouncedText, text, sort, type, status]);

 //formu sıfırla
 const handleReset = (e) => {
  e.prevendefault();
  //stateleri sıfırla
  setText();
  setDebouncedText();
  setSort();
  setStatus();
  setType();
  //inputları sıfırla
  e.target.reset();
 };

  return <div className="filter-sec">
    <h2>Filtreleme Formu</h2>
    <form onSubmit={handleReset}>
        <div>
            <label>Ara</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
        <Select 
        handleChange={(e) => setStatus(e.target.value)} 
        label={"Durum"} 
        options={statusOpt}
        />

        <Select 
        handleChange={(e) => setType(e.target.value)} 
        label={"Tür"} 
        options={typeOpt}
        />

        <Select 
        handleChange={(e) => setSort(e.target.value)}
        label={"Sırala"} 
        options={sortOpt}
        />

        <div>
            <SubmitButton text={"Filtreleri Sıfırla"} />
        </div>
    </form>
  </div>;
    
}

export default Filter
