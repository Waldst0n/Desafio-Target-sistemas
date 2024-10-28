const data = [
    {
        state: 'SP',
        value: 67836.43,
    },
    {
        state: 'RJ',
        value: 36678.66,
    },
    {
        state: 'MG',
        value: 29229.88,
    },
    {
        state: 'ES',
        value: 27165.48,
    },
    {
        state: 'Outros',
        value: 19849.53,
    },
]

const sumData = data.reduce((acc, item) => {
    return acc + item.value
}, 0)

const calculatePercentage = (sumData, data) => {
    return data.map((item) => {
        const total = (item.value * 100) / sumData
        const result = total.toFixed(2)
        return ` A porcentagem do estado ${item.state} é: ${result}`
    })
}

console.log(calculatePercentage(sumData, data))
