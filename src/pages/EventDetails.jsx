import { useParams } from "react-router-dom";
const EventDetails = () => {
  const params = useParams();
  return <div>event details and params is {params.id}</div>;
};

export default EventDetails;
