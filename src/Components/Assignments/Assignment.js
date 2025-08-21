



export function Assignment({ outbound, id, flight, ToggleAss, DeleteAss, bags }) {

    return (
        <li >
            <label>
                Flight: AA{flight}, BagCount:{bags}, Outbound: <input type='checkbox' checked={outbound} onChange={e => ToggleAss(id, e.target.checked)} />
            </label>
            
            <button onClick={() => DeleteAss(id)} className='del-btn'>Delete</button>
        </li>
    )

}