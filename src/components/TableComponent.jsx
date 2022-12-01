import React from 'react';

const TableComponent = ({ data }) => {
    const columns = ["name", "city", "email", "joiningDate", "role"];
    const customizedColumns = columns.filter(e => e !== "name");
    const colNamePlaceHolders = {
        name: "Name",
        city: "City",
        email: "Email Address",
        joiningDate: "Joining Date",
        role: "Role"
    }

    return (
        <table>
            <thead>
                {
                    columns.map(c => <th key={c} >
                        {colNamePlaceHolders[c]}
                    </th>)
                }
            </thead>
            <tbody>
                {
                    data.map(d => <tr key={d.email} >
                        {
                            <>
                                {
                                    columns.indexOf("name") !== -1 &&
                                    <td>
                                        <img src={d.person.avatar} alt="profile pic" />
                                        <p>{`${d.person.name}`}</p>
                                    </td>
                                }
                                {
                                    customizedColumns.map(prop => <td key={prop} >{d[prop]}</td>)
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