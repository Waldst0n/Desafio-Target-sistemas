const stringReverse = (string) => {
    let reversedString = ''
    for (let index = string.length - 1; index >= 0; index--) {
        reversedString += string[index]
    }

    return reversedString
}
const result = stringReverse('Waldston')
console.log(result)
