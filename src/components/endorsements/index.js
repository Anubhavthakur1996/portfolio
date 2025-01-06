import "./endorse_index.scss";
import EndorsementsUI from "./EndorsementsUI";
import endoresemnt from "../../data/endorsement";

const Endorsements = () => {
  const props = {
    endoresemnt,
  };
  return <EndorsementsUI {...props} />;
};

export default Endorsements;
