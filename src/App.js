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
        <p className="text-md text-gray-400 my-1 f-poppins">Build with React.js and Tailwindcss</p>
        <div className="flex space-x-4 items-center my-5" >
          <a className="border-2 border-blue-500 text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white px-12 py-2 " href="https://github.com/mahfuzswaron/table-assesment" target="_blank" rel="noopener noreferrer"> {"</> Source Code"}</a>
          <a className="border-2 border-blue-500 text-white hover:border-transparent bg-blue-500 hover:bg-blue-700 px-12 py-2 " href="https://github.com/mahfuzswaron/table-assesment" target="_blank" rel="noopener noreferrer"> Explanation Video </a>
        </div>
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
