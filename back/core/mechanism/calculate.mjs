import { evaluate } from "mathjs"
export function calculate(operation) {
    console.log(operation)
    const result = evaluate(operation)
    console.log(result)
    return result
}