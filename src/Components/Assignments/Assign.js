import { useState, useEffect } from "react";
import { NewForm } from "./NewForm";
import { AssignList } from "./AssignList";
import { DeleteAll } from "./DeleteAll";
import "./Assign.css";




export function Assign() {

    const [ass, setAss] = useState(() => {
        const localValue = localStorage.getItem("ASS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ASS", JSON.stringify(ass))
    })



    function AddAss(flight, bags) {

        setAss(currentAssign => {
            return [
                ...currentAssign,
                { id: crypto.randomUUID(), flight, outbound: false, bags }
                ,
            ]
        }
        )
    }

    function ToggleAss(id, outbound) {
        setAss(currentAssign => {
            return currentAssign.map(ass => {
                if (ass.id === id) {
                    return { ...ass, outbound }
                }

                return ass
            }
            )
        }
        )
    }

    function DeleteAss(id) {
        setAss(currentAssign => {
            return currentAssign.filter(ass => ass.id !== id)
        })
    }

    function DeleteAllAss() {
        setAss([])
    }


    return (
        <>

            <section className="wrapper">
                <NewForm onSubmit={AddAss} />
                <AssignList ass={ass} ToggleAss={ToggleAss} DeleteAss={DeleteAss} />
                <div className="delAll-btn">
                <DeleteAll ass={ass} DeleteAllAss={DeleteAllAss} />
                </div>
            </section>

        </>
    );
}

