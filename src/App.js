import { useState } from "react";
import TableComponent from "../src/components/TableComponent";

function App() {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("tableData.json").then(res => res.json()).then(data => setData(data))
  }, []);
  if (!data || !data.length) {
    return <div className="flex justify-center items-center h-screen">
      <div class="spinner"><div></div><div></div><div></div></div>
    </div>
  }
  return (
    <div className="px-20 py-10">
      <div className="py-10" >
        <h1 className="text-5xl text-blue-500 font-medium f-poppins" >Table Assessment Solution</h1>
        <p className="text-md text-gray-400 my-1 f-poppins">Builed with React.js and Tailwindcss</p>

      </div>
      <div className="my-10 grid grid-cols-1 gap-12" >
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
    </div>
  );
}

export default App;
