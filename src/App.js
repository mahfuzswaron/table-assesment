import { useState } from "react";
import TableComponent from "../src/components/TableComponent";

function App() {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("tableData.json").then(res => res.json()).then(data => setData(data))
  }, []);
  if (!data || !data.length) {
    return <div>
      <p>Loading...</p>
    </div>
  }
  return (
    <div className="px-20 py-10 grid grid-cols-1 gap-20" >
      <TableComponent data={data} config={{
        "columns": ["name", "city", "email", "joiningDate", "role"],
        "sortingCols": ["name", "city", "email", "joiningDate", "role"]
      }} />
      <TableComponent data={data} config={{
        "columns": ["name", "email", "role"],
        "sortingCols": ["name"]
      }} />
      <TableComponent data={data} config={{
        "columns": ["email", "joiningDate", "role"],
        "sortingCols": ["joiningDate", "role"]
      }} />
      <TableComponent data={data} config={{
        "columns": ["name", "city", "joiningDate", "role"],
        "sortingCols": ["city", "role"]
      }} />
    </div>
  );
}

export default App;
