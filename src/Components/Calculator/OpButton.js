import { ACTIONS } from "./Display"


export default function OpButton({ dispatch, op }) {
    return <button className="op" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload:{ op } })}>
        {op}</button>
}
