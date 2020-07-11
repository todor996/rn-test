export const compose = (...func)=>args=>{
    return func.reduceRight((current,fun)=>{
        return fun(current)
    },args)
}
