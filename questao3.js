const data = require('./data.json')

const minValueInvoicing = (data) => {
    const ignoredValue = 0
    const min = data
        .filter((item) => item.valor !== ignoredValue)
        .reduce((a, b) => {
            if (b.valor < a.valor) a = b
            return a
        })
    return min
}

const maxvalueInvoicing = (data) => {
    const ignoredValue = 0
    const max = data
        .filter((item) => item.valor !== ignoredValue)
        .reduce((a, b) => {
            if (b.valor > a.valor) a = b
            return a
        })
    return max
}

const highestAverageBillingDays = (data) => {
    const ignoredValue = 0
    const filteredDays = data.filter((item) => item.valor !== ignoredValue)

    const total = filteredDays.reduce(
        (acumulator, item) => acumulator + item.valor,
        0
    )

    const media = total / filteredDays.length
    const daysHighest = filteredDays.filter((item) => item.valor > media)

    return daysHighest
}

console.log('O menor valor foi: ', minValueInvoicing(data))

console.log('O maior valor foi: ', maxvalueInvoicing(data))

console.log(
    'Os dias de faturamento acima da média foram: ',
    highestAverageBillingDays(data)
)
