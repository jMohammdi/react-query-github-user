import { useQuery } from "react-query";

export const getLabels = () => {
  const labelQuery = useQuery(["labels"], () =>
    fetch("/api/labels").then((res) => res.json())
  );
  return labelQuery;
};
