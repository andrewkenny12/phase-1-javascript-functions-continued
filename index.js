function saturdayFun(a = 'roller-skate') {
    return (`This Saturday, I want to ${a}!`)
}


let mondayWork = function(b = 'go to the office') {
    return (`This Monday, I will ${b}.`)
}


function wrapAdjective(inner = '*') {
   return function(adj='special'){
        return `You are ${inner}${adj}${inner}!`;
    }
}
