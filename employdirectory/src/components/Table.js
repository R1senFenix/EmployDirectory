import React from "react";
import '../css/Table.css';
import employee from "../employee.json"

function Table() {
    const showEmp = employee.filter(function (seeEmp) {
        return seeEmp.showing === true;
    })
    return (
        <div className="table-responsive">

            <table id="dtBasicExample" class="table table-primary table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th class="th" scope="col">ID #</th>
                        <th class="th" scope="col">First Name</th>
                        <th class="th" scope="col">Last Name</th>
                        <th class="th" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {showEmp.map(item => (
                        <tr>
                            <th scope="row" key={item.id}>{item.id}</th>
                            <td key={item.firstName}>{item.firstName}</td>
                            <td key={item.lastName}>{item.lastName}</td>
                            <td key={item.email}>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Table;