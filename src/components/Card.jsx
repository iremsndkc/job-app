import DelButton from "./DelButton"
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

const Card = ({job}) => {
    const colors = {
        Mülakat:"green",
        Reddedildi:"red",
        "Devam Ediyor":"orange",
    };
  return <div className="card">
    <div className="head">
        <section>
            <div className="letter">
                <span>{job.company[0]}</span>
            </div>
            <div className="info">
                <p>{job.position}</p>
                <p>{job.company}</p>
            </div>
        </section>
        <section>
        <DelButton id={job.id} />
        </section>
    </div>
    <div className="body">
        <div className="field">
        <FaLocationDot />
            <p>{job.location}</p>
        </div>
        <div className="field">
        <FaSuitcase />
            <p>{job.type}</p>
        </div>
        <div className="field">
        <FaCalendarCheck />
            <p>{new Date(job.date).toLocaleDateString()}</p>
        </div>
        <div className="status">
            <p style={{
                background: colors[job.status],
            }}>
                {job.status}
            </p>
        </div>
    </div>
  </div>
}

export default Card
