import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmpTable from './EmpTable';
// import Header from './Header';

class EmpForm extends Component {
    constructor() {
        super();
        this.state = {
            studData: {
                stuId: "",
                stuName: "",
                stuMark1: "",
                stuMark2: "",
                stuMark3: "",
                stuTotal: "",
                stuStatus: "",
                stuRank: ""
            },
            fullStudData: [],
            studLength: false,
            isUpdateNeeded: false,
            updateDataIndex: "",
            errors: {}

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        // this.state.studData[name] = value;
        this.setState({
            studData: {  ...this.state.studData ,
                [name] : value }
        });
        // console.log(this.state)
    }
    handleValidation = () => {
        let fields = this.state.studData;
        let errors = {};
        let formValid = true;
        if (!fields["stuId"]) {
            formValid = false;
            errors["stuId"] = "This is a required field";
        }
        if (!fields["stuName"]) {
            formValid = false;
            errors["stuName"] = "This is a required field";
        }
        if (!fields["stuMark1"]) {
            formValid = false;
            errors["stuMark1"] = "This is a required field";
        }
        if (!fields["stuMark2"]) {
            formValid = false;
            errors["stuMark2"] = "This is a required field";
        }
        if (!fields["stuMark3"]) {
            formValid = false;
            errors["stuMark3"] = "This is a required field";
        }
        // console.log(fields);
        this.setState({ errors: errors });
        return formValid;
    }
    clear = () => {
        this.setState({
            studData: {
                stuId: "",
                stuName: "",
                stuMark1: "",
                stuMark2: "",
                stuMark3: ""
            }
        });
    }
    // findStatus = (m1, m2, m3) => {
    //     if ((m1 || m2 || m3) > 40) {
    //         return "Pass";
    //     }
    //     else {
    //         return "Fail";
    //     }
    // }
    addingNewStud = (event) => {
        event.preventDefault();
        // console.log(this.state.studData)
        let myData = this.state.fullStudData;
        if (this.handleValidation()) {
            let mark1, mark2, mark3, total, status;
            mark1 = parseInt(this.state.studData.stuMark1);
            mark2 = parseInt(this.state.studData.stuMark2);
            mark3 = parseInt(this.state.studData.stuMark3);
            total = mark1 + mark2 + mark3;
            status = ((mark1 || mark2 || mark3) > 40) ? "Pass" : "Fail";
            console.log(status)
            // status = this.findStatus(mark1, mark2, mark3);
            // this.setState({
            //     studData: {
            //         stuTotal : total,
            //         stuStatus : status
            //     }
            // });
            this.state.studData["stuTotal"] = total;
            this.state.studData["stuStatus"] = status;
            // console.log(this.state.studData)
            // this.setState({studData[stuTotal]: total});
            // console.log(status);
            myData.push(this.state.studData);
            myData.sort((a, b) => { return b.stuTotal - a.stuTotal });
            // console.log(myData);
            myData.forEach((eachStudent, index) => {
                console.log(eachStudent);
                if (eachStudent["stuStatus"] === "Pass") {
                    eachStudent["stuRank"] = index + 1;
                    // this.setState(studData["stuRank"] : rank });
                } else {
                    eachStudent["stuRank"] = 0;
                    // this.setState({studData: {stuRank : rank }});
                    // this.setState({
                    //     studData: {stuRank : index+1}   
                    // });
                    // this.state.studData["stuRank"] = index + 1;
                }
            });
            this.setState({
                studLength: true
            });
            this.clear();
            alert("Form is submitted");
        } else {
            alert("Form has errors");
            this.clear();
        }
        // console.log(myData);    
    }
    deleteItem = (index) => {
        // console.log("I am clicked");
        let myData = this.state.fullStudData;
        myData.splice(index, 1)
        this.setState({
            fullStudData: myData
        })
        if (myData.length === 0)
            this.setState({
                studLength: false
            })
    }
    editItem = (index) => {
        this.setState({
            updateDataIndex: index,
            isUpdateNeeded: true
        });
        let myData = this.state.fullStudData[index];
        this.setState({
            studData: {
                stuId: myData.stuId,
                stuName: myData.stuName,
                stuMark1: myData.stuMark1,
                stuMark2: myData.stuMark2,
                stuMark3: myData.stuMark3
            }
        });

    }
    updateItem = (event) => {
        event.preventDefault();
        let index = this.state.updateDataIndex;
        let myData = this.state.fullStudData;

        myData[index] = this.state.studData;
        this.setState({
            fullStudData: myData,
            isUpdateNeeded: false
        })
        let mark1, mark2, mark3, total, status, rank;
        mark1 = parseInt(this.state.studData.stuMark1);
        mark2 = parseInt(this.state.studData.stuMark2);
        mark3 = parseInt(this.state.studData.stuMark3);
        total = mark1 + mark2 + mark3;
        status = ((mark1 || mark2 || mark3) > 40) ? "Pass" : "Fail";
        // console.log(status)
        // status = this.findStatus(mark1, mark2, mark3);
        this.state.studData["stuTotal"] = total;
        this.state.studData["stuStatus"] = status;
        // console.log(this.state.studData)
        // this.setState({studData[stuTotal]: total});
        // console.log(status);
        myData.sort((a, b) => { return b.stuTotal - a.stuTotal });
        // console.log(myData);
        myData.forEach((eachStudent, index) => {
            console.log(eachStudent);
            // if (eachStudent["stuStatus"] === "Pass") {
            //     rank = index+1;
            //     this.setState({studData: {stuRank : rank }});
            // } else {
            //     rank = 0;
            //     this.setState({studData: {stuRank : rank }});
            //     // this.setState({
            //     //     studData: {stuRank : index+1}   
            //     // });
            //     // this.state.studData["stuRank"] = index + 1;
            // }
            if (eachStudent["stuStatus"] === "Pass") {
                eachStudent["stuRank"] = index + 1;
                // this.setState(studData["stuRank"] : rank });
            } else {
                eachStudent["stuRank"] = 0;
                // this.setState({studData: {stuRank : rank }});
                // this.setState({
                //     studData: {stuRank : index+1}   
                // });
                // this.state.studData["stuRank"] = index + 1;
            }
        });
        this.clear();
    }

    cancelUpdate = () => {
        this.clear();
        this.setState({
            isUpdateNeeded: false
        })
    }
    render() {
        return (

            <div className="container">
                <h1> Student Validation </h1>
                <form className="form-inline">
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuId">Student Id</label>
                        <input type="text" className="form-control" id="stuId" name="stuId"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuId}
                        // value={this.state.stuId} 
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuId"]}</span>

                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="stuName"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuName}
                        // value={this.state.stuName} 
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuName"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark1">Mark 1</label>
                        <input type="text" className="form-control" id="stuMark1" name="stuMark1"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark1}
                        // value={this.state.stuMark1}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark1"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark2">Mark 2</label>
                        <input type="text" className="form-control" id="stuMark2" name="stuMark2"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark2}
                        // value={this.state.stuMark2}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark2"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark3">Mark 3</label>
                        <input type="text" className="form-control" id="stuMark3" name="stuMark3"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark3}
                        // value={this.state.stuMark3}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark3"]}</span>
                    </div>
                    {this.state.isUpdateNeeded ?
                        <div className="col-sm-12 my-2">
                            <button className="btn btn-success mr-2" onClick={this.updateItem}> Update </button>
                            <button className="btn btn-danger" onClick={this.cancelUpdate}> Cancel </button>
                        </div> :
                        <div className="col-sm-12">
                            <button className="btn btn-primary mr-2 my-2" onClick={this.addingNewStud}> Add </button>
                        </div>
                    }
                </form>
                {this.state.studLength ? <EmpTable formData={this.state.fullStudData} deleteItem={this.deleteItem} editItem={this.editItem}></EmpTable> : null}
            </div>

        );
    }
}

export default EmpForm;