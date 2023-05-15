import React from 'react';
import ShowHelthData from './component/ShowHelthData/ShowHelthData';
import { HelthDataContaxWrapper } from './component/maincontax/HelthDataContax';

function App() {

let obj ={
  
   a: 5,
   b:25

}
let newA = obj.hasOwnProperty("a") ;
let newB = obj.hasOwnProperty("d");

console.log("result " , newA);
console.log("result " , newB);



  return (
    <>

          <HelthDataContaxWrapper>

                <ShowHelthData/>

          </HelthDataContaxWrapper>
  </>
  );
}

export default App;
