import React, { useState } from 'react';
import sortIcon from "../ArrowsDownUp.svg";


const TableComponent = ({ data, config }) => {
    const [sortedData, setSortedData] = useState(data);
    const [ascending, setAscending] = useState(true);
    const { columns, sortingCols } = config;
    const customizedColumns = columns.filter(e => e !== "name");
    const colNamePlaceHolders = {
        name: "Name",
        city: "City",
        email: "Email Address",
        joiningDate: "Joining Date",
        role: "Role"
    };
    const sortByProp = prop => {
        if (prop === "joiningDate") {
            setSortedData([...sortedData.sort((a, b) => {
                let dateA = a.joiningDate,
                    dateB = b.joiningDate;
                // dd/mm/yy --> mm/dd/yy 
                dateA = `${dateA.slice(3, 5)}/${dateA.slice(0, 2)}/${dateA.slice(6, 10)}`;
                dateB = `${dateB.slice(3, 5)}/${dateB.slice(0, 2)}/${dateB.slice(6, 10)}`
                return ascending ? new Date(dateA) - new Date(dateB) : new Date(dateB) - new Date(dateA);

            })])
        }
        else {
            const sortedArr = sortedData.sort((a, b) => {
                let elementA = a[prop]?.toLowerCase(),
                    elementB = b[prop]?.toLowerCase();
                if (prop === "name") {
                    elementA = a.person.name.toLowerCase();
                    elementB = b.person.name.toLowerCase();
                }
                if (elementA < elementB) {
                    return ascending ? -1 : 1
                }
                else if (elementA > elementB) {
                    return ascending ? 1 : -1;
                }
                else {
                    return 0;
                }
            });
            setSortedData([...sortedArr]);
        }
        setAscending(!ascending);
    }

    return (
        <table className='max-w-fit px-10 text-[0.875rem] text-[#383838] border border-collapse border-[#E1E1E1]' >
            <thead>
                <tr className=''>
                    {
                        columns.map(c => <th
                            className={` ${c === "email" ? "w-[13.75rem" : "w-[10.938rem]"}  px-[0.625rem] py-[0.5rem] font-semibold border border-[#E1E1E1]`}
                            key={c} >
                            <div className='flex space-x-[0.625rem] items-center '>
                                <span>{colNamePlaceHolders[c]}</span>
                                {
                                    sortingCols.indexOf(c) !== -1 && // if the prop is in sortingCols
                                    <button className='tooltip' onClick={() => sortByProp(c)} >
                                        <img src={sortIcon} alt="" />
                                        <span className='tooltiptext'>{ascending ? "Sort Ascending" : "Sort Descending"} </span>
                                    </button>
                                }
                            </div>
                        </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    sortedData.map((d, i) => <tr key={d.email} className={`${i % 2 === 0 && "bg-[#F5F5F5] "}`} >
                        {
                            <>
                                {
                                    columns.indexOf("name") !== -1 &&
                                    <td className="px-[0.625rem] py-[0.5rem] border border-[#E1E1E1]" >
                                        <div className="grid grid-cols-4 items-center ">
                                            <img className='col-span-1' src={d.person.avatar} alt="profile pic" />
                                            <p className='col-span-3 ' >{`${d.person.name}`}</p>
                                        </div>
                                    </td>
                                }
                                {
                                    customizedColumns.map(prop => <td key={prop} className=" px-[0.625rem] py-[0.5rem] border border-[#E1E1E1]" >{
                                        <span className={`${prop === "email" && "text-[#0071CC] underline underline-offset-2 "}`} >{d[prop]}</span>
                                    }</td>)
                                }
                            </>
                        }
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default TableComponent;