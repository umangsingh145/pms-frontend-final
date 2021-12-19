import axios from "axios";
import { useState } from "react";
import Employee from "../models/Employee";

const AddEmployee = (props) => {
    const [employee, setEmployee] = useState(new Employee());
    const handleChange = (event) => {
        console.log(event.target.value);
        setEmployee({ employee, [event.target.name]: event.target.value }
        )
    }
    const onSubmit = () => {
        console.log('onSubmit');
        axios.post('http://localhost:8082/addemp', employee)
            .then((response) => {
                alert(response.data.firstName + 'added ')
            })
            .catch(() => {
                alert('something is wrong')
            })
    }
    return (
        <div className="container">
            <p>Added Employee</p>
            <div>
                <form>
                    <input type="text" name="firstName" value={employee.firstName} placeholder="Please enter first name" onChange={handleChange} />
                    <br />

                    <input type="text" name="salary" value={employee.salary} placeholder="Enter salary" onChange={handleChange} />
                    <br />                    <input className="button btn-success" type="submit" value="Add Employee" onClick={onSubmit} />
                </form>
            </div>

        </div >

    )

}
export default AddEmployee;