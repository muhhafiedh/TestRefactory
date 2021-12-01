function getLeapYears(startRange, endRange) {
    let listYears = []
    for (let year = startRange + 1; year <= endRange; year++) {
        if (year % 4 == 0 || year % 400 == 0)
            listYears[listYears.length] = year
    }
    return listYears
}
console.log(
    getLeapYears(1900, 2020)
)