import { useEffect, useState } from "react"

const EmpDept = (props) =>{
    console.log("Emp Department")

    const [deptId, setDeptId] = useState(0)
    const [deptName, setDeptName] = useState("")

    useEffect( ()=>{
        console.log("Use Effect Empdept")
        setDeptId(1)
        setDeptName("HR")
                }
    ,[])

    const empDeptVal = ()=>{
        console.log("Emp Dept Value")

        return deptId;
    }
    const empDeptName = ()=>{
        console.log("Emp Dept Name")
        console.log(deptName)
        return deptName;
    }

    return (
        <div>
            <p className="display-4 text-primary">Emp Department Component</p>
            <p> Emp Id data in Department component :  {deptId}</p>
            <p> Emp Dept Name data in Department component :  {deptName}</p>

            <button className="btn btn-primary" onClick={() => { props.callDeptParent(empDeptVal)
                props.callNameDeptParent(empDeptName) }} >
                Pass data From Dept To parent</button>
        </div>
    );

}

export default EmpDept;