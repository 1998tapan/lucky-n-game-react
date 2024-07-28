function getRolls(numDices) {
    return Array.from({ length: numDices }, d6);
}

function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

function sum(nums) {
    return nums.reduce((prev, curr) => prev + curr, 0)
}
export { getRolls, d6, sum }