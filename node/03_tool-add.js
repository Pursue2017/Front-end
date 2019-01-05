//工具模块
var tools = {
    add: (...numbers) => {
        let sum = 0;
        for(let number in numbers) {
            sum += numbers[number];
        }
        return sum;
    }
}

//CommonJS 规范，模块化
// exports.str = str;
 module.exports= tools;