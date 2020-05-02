import React from "react";
import '../css/Table.css';
import employee from "../employee.json"

function Table() {
    const showEmp = employee.filter(function (seeEmp) {
        return seeEmp.showing === true;
    })
    return (
        <div className="table-responsive">

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Table;