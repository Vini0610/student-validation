import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class EmpTable extends Component {
   
    findStatus = (m1,m2,m3) =>{
        if((m1 || m2 || m3) < 40){
            return "Fail";
        }
        else{
            return "Pass";
        }
    }
    findTotal = (m1,m2,m3) => {
        let total = m1+m2+m3;
        return total;
    }
    findRank = ()=>{}
    render() {
        return (
            <div className="container mt-4">
                <h2>Student Table</h2>

                <table className="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th>Stud Id</th>
                            <th>Name</th>
                            <th>Mark 1</th>
                            <th>Mark 2</th>
                            <th>Mark 3</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Rank</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {this.props.formData.map((singleStud, index) => (
                            <tr key={index}>
                                <td> {singleStud.stuId} </td>
                                <td> {singleStud.stuName}</td>
                                <td> {singleStud.stuMark1}</td>
                                <td> {singleStud.stuMark2}</td>
                                <td> {singleStud.stuMark3}</td>
                                <td> {this.findTotal(parseInt(singleStud.stuMark1), parseInt(singleStud.stuMark2), parseInt(singleStud.stuMark3))}</td>
                                <td> {this.findStatus(parseInt(singleStud.stuMark1), parseInt(singleStud.stuMark2), parseInt(singleStud.stuMark3))}</td>
                                <td> {this.findRank(parseInt(singleStud.stuMark1), parseInt(singleStud.stuMark2), parseInt(singleStud.stuMark3))}</td>
                                <td> <button className="btn btn-primary mr-2" onClick={()=> this.props.editItem(index)}> Edit </button><button className="btn btn-secondary" onClick={()=>this.props.deleteItem(index)}> Delete </button></td>
                            </tr>
                        ))
                        } */}
                         {this.props.formData.map((singleStud, index) => (
                            <tr key={index}>
                                <td> {singleStud.stuId} </td>
                                <td> {singleStud.stuName}</td>
                                <td> {singleStud.stuMark1}</td>
                                <td> {singleStud.stuMark2}</td>
                                <td> {singleStud.stuMark3}</td>
                                <td> {singleStud.stuTotal}</td>
                                <td> {singleStud.stuStatus}</td>
                                <td> {singleStud.stuRank}</td>
                                <td> <button className="btn btn-primary mr-2" onClick={()=> this.props.editItem(index)}> Edit </button><button className="btn btn-secondary" onClick={()=>this.props.deleteItem(index)}> Delete </button></td>
                            </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpTable;