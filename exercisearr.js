const arr = Array()
console.log(arr)
const arr2 = [1,2,4,7,9,7]
console.log(arr2.length)
let num = arr2.indexOf(1)
console.log(num)
let num2 = arr2.indexOf(4)
console.log(num2)
let num3 = arr2.lastIndexOf(7)
console.log(num3)
const mixedDataTypes = ['Abdussomad', 200, 10,
                        'Lawal', 'Kolade', true
                ]
    console.log(mixedDataTypes.length)

    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    console.log(itCompanies)
    console.log(itCompanies.length)
    let firstNum = itCompanies.indexOf('Facebook')
    console.log(firstNum)
    let midNum = itCompanies.indexOf('Apple')
    console.log(midNum)
    let lastNum = itCompanies.indexOf('Amazon')
    console.log(lastNum)
    console.log(itCompanies[0])
    console.log(itCompanies[1])
    console.log(itCompanies[2])
    console.log(itCompanies[3])
    console.log(itCompanies[4])
    console.log(itCompanies[5])
    console.log(itCompanies[6])
    console.log(itCompanies[0].toUpperCase())
    console.log(itCompanies[1].toUpperCase())
    console.log(itCompanies[2].toUpperCase())
    console.log(itCompanies[3].toUpperCase())
    console.log(itCompanies[4].toUpperCase())
    console.log(itCompanies[5].toUpperCase())
    console.log(itCompanies[6].toUpperCase())
    console.log(itCompanies.join( ))
    console.log(itCompanies.includes('Facebook'))

    const filtereditCompanies = [];

itCompanies.forEach(function(itCompanies) {
  if (/(o.*o)/i.test(itCompanies)) {
    filtereditCompanies.push(itCompanies);
  }
});
// console.log(filtereditCompanies);
// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4,7))
console.log(itCompanies.slice(3,4))
console.log(itCompanies.shift())
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
ele = itCompanies.pop()
console.log(ele)