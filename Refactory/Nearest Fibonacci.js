function getNearestFibonacci(arr) {
    let sumArr = 0

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    let search = true
    let step = 0
    let curFibo = getFibonacci(step)
    let nearestRange = Math.abs(curFibo - sumArr)
    let curNearestRange = nearestRange
    while (search) {
        nearestRange = Math.abs(curFibo - sumArr)
        if (nearestRange <= curNearestRange) {
            curNearestRange = nearestRange
            step++
            curFibo = getFibonacci(step)
        }
        else {
            search = false
        }
    }
    return curNearestRange
}
function getFibonacci(step) {
    if (step == 0) return 0
    else if (step == 1) return 1
    else {
        let fibonacci = 0
        let prevNum = fibonacci
        let nextNum = 1
        for (let i = 0; i < step - 1; i++) {
            fibonacci = prevNum + nextNum
            prevNum = nextNum
            nextNum = fibonacci
        }
        return fibonacci
    }
}
console.log(
    getNearestFibonacci([15, 1, 3])
)