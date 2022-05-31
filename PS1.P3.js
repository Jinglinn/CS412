const expression = (string, func) => func(string)
const expression1 = string => string.split("c").join(",c").split(",")
const expression2 = string =>{
        return{
            originalString: string,
            modifiedString: string.replace(/a/g, "A"),
            numberReplaced: string.split("a").length -1,
            length: string.length
        };
    }
console.log(expression1('supercalifragilisticexpialidocious'))
console.log(expression2('supercalifragilisticexpialidocious'))