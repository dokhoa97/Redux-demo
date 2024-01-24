import { DESCREMENT, INCREMENT } from "./action";

export const initState = 0;
export const reducer = (state,acction)=>{
    switch (acction.type) {
      case INCREMENT : {
        return state + Number(acction.payload)
      }
      case DESCREMENT: {
        return state - Number(acction.payload)
      }
      default:{
        return state
      }
    }
  }