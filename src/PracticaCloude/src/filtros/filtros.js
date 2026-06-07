const filtros = {
    "==":(attribute,value)=>(h)=>(h[attribute]==value),
    ">=":(attribute,value)=>(h)=>(h[attribute]>=value),
    ">":(attribute,value)=>(h)=>(h[attribute]>value),
    "<":(attribute,value)=>(h)=>(h[attribute]<value),
    "<=":(attribute,value)=>(h)=>(h[attribute]<=value),
    "!=":(attribute,value)=>(h)=>(h[attribute]!=value),
    "includes":(attribute,value)=>(h)=>(h[attribute].includes(value)),

}

module.exports=filtros