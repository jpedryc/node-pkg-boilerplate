export class MyClass {
    /**
     * This is just a sample function that returns the percentage value of a number
     * 
     * @param percent
     * @param amount
     * @returns {number}
     */
    callMe({ percent = 100, amount }) {
        return (percent / 100) * amount
    }
}