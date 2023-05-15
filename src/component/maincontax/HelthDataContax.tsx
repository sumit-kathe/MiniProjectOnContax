
// name import default import 
// name import ------->  {creatContax, useState} from 'react'
// default import -------->  react from 'react';
import { createContext, useReducer } from "react";
import { actionType, stateType } from "../../store/store";
import reducerfun, { initialstate } from "../../store/storeReducer";



const HelthDataContax= createContext({

    usersdata:initialstate    

});   


 


export const HelthDataContaxWrapper:React.FC<any> = (props)=>{
  
  const [userstate, dispatch] = useReducer(reducerfun  , initialstate)

   

     const {children} = props

    return(

            <HelthDataContax.Provider value={

              {usersdata:initialstate}

          
            }> 
            
                  <div>

                        {children}

                    </div>
         </HelthDataContax.Provider>
        

    )
  }

export default HelthDataContax;