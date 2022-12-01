import React, { useState } from 'react';

const sortIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z" clipRule="evenodd" />
</svg>

const TableComponent = ({ data, config }) => {
    const [sortedData, setSortedData] = useState(data);
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
                // 24/07/2020	`${dateA.slice(3,5)}/${dateA.slice(0,2)}/${dateA.slice(6,10)}`
                let dateA = a.joiningDate,
                    dateB = b.joiningDate;
                dateA = `${dateA.slice(3, 5)}/${dateA.slice(0, 2)}/${dateA.slice(6, 10)}`;
                dateB = `${dateB.slice(3, 5)}/${dateB.slice(0, 2)}/${dateB.slice(6, 10)}`
                return new Date(dateA) - new Date(dateB);

            })])
        }
        else {
            const sortedArr = sortedData.sort((a, b) => {
                let elementA = a[prop].toLowerCase(),
                    elementB = b[prop].toLowerCase();
                if (elementA < elementB) {
                    return -1;
                }
                else if (elementA > elementB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            setSortedData([...sortedArr])
        }
    }

    return (
        <table className='w-full px-10 border text-[0.875rem] text-[#383838]' >
            <thead>
                {
                    columns.map(c => <th
                        className='text-start border border-[#E1E1E1] px-[0.625rem] py-[0.5rem] font-semibold  '
                        key={c} >
                        <div className='flex space-x-[0.625rem] items-center '>
                            <span>{colNamePlaceHolders[c]}</span>
                            {
                                sortingCols.indexOf(c) !== -1 && // if the prop/cols is in sorting arr
                                <button onClick={() => sortByProp(c)} > {sortIcon} </button>
                            }
                        </div>
                    </th>)
                }
            </thead>
            <tbody>
                {
                    sortedData.map((d, i) => <tr key={d.email} className={`${i % 2 === 0 && "bg-[#F5F5F5] "}`} >
                        {
                            <>
                                {
                                    columns.indexOf("name") !== -1 &&
                                    <td className="flex space-x-[0.625rem] items-center border-[0.5px] border-[#E1E1E1] px-[0.625rem] py-[0.5rem]" >
                                        <img src={d.person.avatar} alt="profile pic" />
                                        <p>{`${d.person.name}`}</p>
                                    </td>
                                }
                                {
                                    customizedColumns.map(prop => <td key={prop} className="border border-[#E1E1E1] px-[0.625rem] py-[0.5rem]" >{
                                        <span className={`${prop === "email" && "text-[#0071CC] underline"}`} >{d[prop]}</span>
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