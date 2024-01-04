import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/Custom/CustomButton/CustomButton";

const SpecificCategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomButton name="Go back" themes="BACK" onClick={() => navigate(-1)} />

      <h1 className="text-center">навушник зара</h1>
    </div>
  );
};

export default SpecificCategoryPage;
