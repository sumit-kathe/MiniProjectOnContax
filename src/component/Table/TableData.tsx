import { useContext } from "react";
import styless from "./TableData.module.scss";
import HelthDataContax from "../maincontax/HelthDataContax";
import { stateType, stateValue } from "../../store/store";

const TableData = () => {

    const contaxdata = useContext(HelthDataContax)

    const {usersdata} =contaxdata

    // const  usersdata = useContext(HelthDataContax) you can do this also directly same name se constant bana liya

    console.log("contax data " , contaxdata)
    console.log("contax data " , usersdata)



     const tablebody = usersdata.map((data ,)=>{

            const onEdit =(perticularuser:stateType)=>{
                console.table(perticularuser)
 // if you want your data in tabulra format then  you can use console.table(object) accept object only
 // console.warn();
 //console.error();

 //console.trace(perticularuser)
            }
    
            const onView =(perticularuser:stateType)=>{

                console.table(perticularuser)

            }
    
          return  <tr key={data.id}>

            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.BP.value}</td>
            <td>{data.HR.value}</td>
            <td>{data.SBP.value}</td>
            <td>{data.DBP.value}</td>
            <td>{data.PR.value}</td>
            <td>{data.SR.value}</td>

            
            <td><button type="button" onClick={()=>onEdit(data)}>EDIT</button></td>

            <td><button type="button"  onClick={()=>onView(data)}>VIEW</button></td>
    
            
          </tr>
        

       
     }


     )

  return (
    <>
      <table className={styless["table"]}>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>{usersdata[0].BP.name}</th>
            <th>{usersdata[0].HR.name}</th>
            <th>{usersdata[0].SBP.name}</th>
            <th>{usersdata[0].DBP.name}</th>
            <th>{usersdata[0].PR.name}</th>
            <th>{usersdata[0].SR.name}</th>
            <th> Edit MODE </th>
            <th> View MODE</th>

          </tr>
        </thead>
        <tbody>

          
          {tablebody}

        </tbody>
      </table>
    </>
  );
};

export default TableData;
