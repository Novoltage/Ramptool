import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OpButton from "./OpButton";


export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OP: "choose-operation",
    EVALUATE: "evaluate"
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOp:payload.digit,
                    overwrite:false
                }
            }
            if (payload.digit === "0" && state.currentOp === "0") return state
            if (payload.digit === "." && state.currentOp == null) return state
            if (payload.digit === "." && state.currentOp.includes(".")) return state
            return {
                ...state,
                currentOp: `${state.currentOp || ""}${payload.digit}`,
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOp: "0",
                previousOp: null,
                op: null
            }
        case ACTIONS.CHOOSE_OP:
            if (state.currentOp == null && state.previousOp == null) return state

            if(state.currentOp == null)
            return{
                ...state,
                op:payload.op,
            } 

            if (state.previousOp == null) {
                return {
                    ...state,
                    op: payload.op,
                    previousOp: state.currentOp,
                    currentOp: null,
                }
            }

            return {
                ...state,
                previousOp: Evaluate(state),
                op: payload.op,
                currentOp: null
            }

        case ACTIONS.EVALUATE:
            if(
                state.currentOp == null ||
                state.previousOp == null ||
                state.op ==null
            ) return state

            return{
                ...state,
                overwrite: true,
                previousOp: null,
                op: null,
                currentOp: Evaluate(state),

            }
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    overwrite:false,
                    currentOp:null
                }
            }
            if(state.currentOp == null) return state
            if(state.currentOp.length === 1){
                return{
                    ...state,
                    currentOp:null
                }
            }
            return{
                ...state,
                currentOp: state.currentOp.slice(0, -1)
            }
    }
};

const INTERGER_FORMATTER = new Intl.NumberFormat("en-us",{maximumFractionDigits:0})

function FormatOp(operand){
    if(operand == null) return
    const [interger, decimal] = operand.split(".")
    if(decimal == null) return INTERGER_FORMATTER.format(interger)
    return `${INTERGER_FORMATTER.format(interger)}.${decimal}`
}

function Evaluate({ currentOp, previousOp, op }) {
    const prev = parseFloat(previousOp)
    const current = parseFloat(currentOp)
    if (isNaN(prev) || isNaN(current)) return ""

    let computation = ""

    switch (op) {
        case "÷":
            computation = prev/current
            break

        case "x":
            computation = prev*current
            break

        case "+":
            computation= prev+current
            break

        case "-":
            computation= prev-current
            break
    }
    return computation.toString()
}

function Display() {

    const [{ currentOp, previousOp, op }, dispatch] = useReducer(reducer, {})


    return (
        <>
            <div className=" calc-grid">
                
                <div className="output">
                    <div className="previous-op">{FormatOp(previousOp)} {op}</div>
                    <div className="current-op">{FormatOp(currentOp)}</div>
                </div>

                <button className=" span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
                <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} >Del</button>
                <OpButton op="÷" dispatch={dispatch} />
                <DigitButton digit="1" dispatch={dispatch} />
                <DigitButton digit="2" dispatch={dispatch} />
                <DigitButton digit="3" dispatch={dispatch} />
                <OpButton op="x" dispatch={dispatch} />
                <DigitButton digit="4" dispatch={dispatch} />
                <DigitButton digit="5" dispatch={dispatch} />
                <DigitButton digit="6" dispatch={dispatch} />
                <OpButton op="+" dispatch={dispatch} />
                <DigitButton digit="7" dispatch={dispatch} />
                <DigitButton digit="8" dispatch={dispatch} />
                <DigitButton digit="9" dispatch={dispatch} />
                <OpButton op="-" dispatch={dispatch} />
                <DigitButton digit="." dispatch={dispatch} />
                <DigitButton digit="0" dispatch={dispatch} />
                <button className=" span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
                

            </div>

        </>

    );
}

export default Display;
