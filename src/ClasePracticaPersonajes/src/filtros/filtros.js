const fabricaFiltros= {
    "==":(atr,value)=>(obj)=>obj[atr]==value,//El id deberia caer despues
    ">":(atr,value)=>(obj)=>obj[atr]>value,
    ">=":(atr,value)=>(obj)=>obj[atr]>=value,
    "<":(atr,value)=>(obj)=>obj[atr]<value,
    "<=":(atr,value)=>(obj)=>obj[atr]<=value,
    "!=":(atr,value)=>(obj)=>obj[atr]!=value,
    "includes":(atr,value)=>(obj)=>obj[atr].includes(value),
    


}

// //Para acordarse
// atributo -> propiedades del objeto
// operador ->   == > <
// value ->  valor que le paso comparativo

module.exports = fabricaFiltros;
