

import { actionType, stateType } from './store';

export const initialstate:stateType[] =[{

    id:0,
    name:"",

    BP: {name:"Blood Pressure",value:0},
    SBP: {name:" Systolic Blood Pressure",value:0},
    DBP: {name:"Dystolic Blood Pressure",value:0},
    PR:{name:"Pulse Rate",value:0},
    HR:{name:"Heart Rate",value:0},
    SR: {name:"Sugar Level",value:0},


}]


const reducerfun=( state=initialstate , action:actionType ,)=>{

    switch(action.type){
  
    case "accept": 
  
    return{
      ...state
    }
  
   }
   


};
export default reducerfun;