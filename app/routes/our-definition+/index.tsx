import OurDefinitionHeader from "~/components/our-definition/header";
import OurWhy from "~/components/our-definition/our-why";

function OurDefinition() {
  return (
    <div>
      <div className="sticky container top-10">
        <OurDefinitionHeader />
      </div>
      <OurWhy />
    </div>
  );
}

export default OurDefinition;
