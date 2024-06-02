import { useNavigate } from "@remix-run/react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

function GoBackButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Button
      onClick={goBack}
      className="bg-[#3F3F3F] rounded-none h-10 w-10 md:h-14 md:w-14 p-2.5"
    >
      <ArrowLeft className="w-6 h-6 md:w-6 md:h-6" />
    </Button>
  );
}

export default GoBackButton;
