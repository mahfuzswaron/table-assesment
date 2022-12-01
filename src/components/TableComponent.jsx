import React from 'react';
const sortIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z" clipRule="evenodd" />
</svg>

const TableComponent = ({ data, config }) => {
    const { columns } = config;
    const customizedColumns = columns.filter(e => e !== "name");
    const colNamePlaceHolders = {
        name: "Name",
        city: "City",
        email: "Email Address",
        joiningDate: "Joining Date",
        role: "Role"
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
                            <span>{sortIcon}</span>
                        </div>
                    </th>)
                }
            </thead>
            <tbody>
                {
                    data.map((d, i) => <tr key={d.email} className={`${i % 2 === 0 && "bg-[#F5F5F5] "}`} >
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