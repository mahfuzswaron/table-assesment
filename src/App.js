import { useState } from "react";
import TableComponent from "../src/components/TableComponent";
import Header from "../src/components/Header";
import Footer from "./components/Footer";

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
    <div className="pt-10">
      {/* header section */}
      <Header />

      {/* table section  */}
      <div className="px-20 my-10 grid grid-cols-1 gap-12" >
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

      <Footer />
    </div>
  );
}

export default App;
