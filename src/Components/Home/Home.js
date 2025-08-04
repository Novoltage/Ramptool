
import { useState } from "react";
import { Clicks } from "../Clicks/Clicks";
import { Calculator } from "../Calculator/Calculator"
import './Home.css'
import { Notes } from "../Notes/Notes";

export function Home() {





    const [list, setList] = useState(0)

    function ListType(listType) {

        setList(listType)
    }


    switch (list) {
        case 1:
            return (
                <>
                    <Clicks />
                    <button className="custom-button btn-1" onClick={() => ListType(0)}> Home </button>
                </>
            )

        case 2:
            return (
                <>
                    <Calculator />
                    <button className="custom-button btn-1" onClick={() => ListType(0)}> Home </button>
                </>
            )

        case 3:
            return (
                <>
                    <Notes />
                    <button className="custom-button btn-1" onClick={() => ListType(0)}> Home </button>
                </>
            )

        default:
            return (
                <div className="home-wrap">
                    <h1 className="home-header">Tools</h1>
                    <div className="home-btns">
                        <button className="custom-btn btn-15" onClick={() => ListType(1)}  >Clicker</button>
                        <button className="custom-btn btn-16" onClick={() => ListType(2)}  >Calculator</button>
                        <button className="custom-btn btn-17" onClick={() => ListType(3)}  >Notes</button>
                        
                        <a href="https://rovrplus.aa.com/task" target="_blank" rel="noreferrer" className="custom-btn btn-18 a-tag">
                            Rovr+
                        </a>
                        <a href="https://prime.app.bags.aa.com/web/" target="_blank" rel="noreferrer" className="custom-btn btn-18 a-tag">
                            Prime
                        </a>
                        <a href="https://get.aa.com/GetNG/home" target="_blank" rel="noreferrer" className="custom-btn btn-18 a-tag">
                            GET
                        </a>

                    </div>
                </div>
            )

    }


};
