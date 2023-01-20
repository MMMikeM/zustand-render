import { useValue } from "./store";

const SubComponent = (props: any) => {
  const { id } = props;

  const data = useValue(id);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>{id}</h3>
      <h3>{data?.name}</h3>
      <h3>{data?.updatedOn}</h3>
    </div>
  );
};

export default SubComponent;
