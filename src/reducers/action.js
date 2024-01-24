export const INCREMENT = 'count/increment'
export const DESCREMENT = 'count/descrement'
export const descrement = (payload)=>{
    return {
        type:DESCREMENT,
        payload:payload
    }
}
export const inscrement = (payload)=>{
    return {
        type:INCREMENT,
        payload:payload
    }
}