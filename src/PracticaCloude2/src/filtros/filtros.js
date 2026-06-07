const filtros = {
    
    ">":(attribute,value)=>(obj)=>(obj[attribute]>value),
    "<":(attribute,value)=>(obj)=>(obj[attribute]<value),
    ">=":(attribute,value)=>(obj)=>(obj[attribute]>=value),
    "<=":(attribute,value)=>(obj)=>(obj[attribute]<=value),
    "==":(attribute,value)=>(obj)=>(obj[attribute]==value),
    "!=":(attribute,value)=>(obj)=>(obj[attribute]!=value),
    "includes":(attribute,value)=>(obj)=>(obj[attribute].includes(value)),
}

module.exports = filtros