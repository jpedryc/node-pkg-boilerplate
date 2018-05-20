export class MyClass {
    callMe({ percent = 100, amount }) {
        return (percent / 100) * amount
    }
}