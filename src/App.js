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
    <div className="px-20 py-10" >
      <TableComponent data={data} config={{
        "columns": ["name", "city", "email", "joiningDate", "role"],
        "sortingCols": ["name", "email", "role", "joiningDate"]
      }} />
    </div>
  );
}

export default App;
