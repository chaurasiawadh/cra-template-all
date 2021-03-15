import CreateTemplate from "src/shared/components/description/CreateTemplate";
import FolderStructure from "src/shared/components/description/FolderStructure";
import CheckApiCall from "src/shared/components/description/CheckApiCall";
import UtilityExample from "src/shared/components/description/UtilityExample";

const HomeComponent = () => {
  return (
    <>
      <CreateTemplate />
      <FolderStructure />
      <CheckApiCall />
      <UtilityExample />
    </>
  );
};

export default HomeComponent;
