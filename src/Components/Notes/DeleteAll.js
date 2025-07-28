


export function DeleteAll({ bullets, DeleteAll }) {
    
 if (bullets.length > 1){
    return(
    <button className='del-btn' onClick={()=>DeleteAll()}>Delete All</button>
    )
 }

    return null

}