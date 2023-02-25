import { getLabels } from "../helpers/useLabelsData";
export default function Label({ label }) {
  const labelsQuery = getLabels();
  if (labelsQuery.isLoading) return null;
  const labelObj = labelsQuery.data.find(
    (queryLabel) => queryLabel.id === label
  );
  console.log(labelsQuery);
  if (!labelObj) return null;
  return (
    <span key={label} className={`label ${labelObj.color}`}>
      {labelObj.name}
    </span>
  );
}
