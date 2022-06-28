import { useNavigate } from "react-router-dom";
import Fotter from "../Shared/Fotter";

const NotFound = () => {
    const navigate = useNavigate()
  return (
      <div>
    <div style={{ height: "50vh" }}>
    <h1  className="text-center mt-5 text-danger">
          404 Not Found
        </h1>
      <div className="text-center">
      <button className="text-center bg-primary text-white rounded" onClick={()=>navigate(`/`)} >Back To Home</button>
      </div>
    </div>
        <Fotter></Fotter>
      </div>
      
  );
};

export default NotFound;
