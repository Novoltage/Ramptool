export function DeleteAll({ ass, DeleteAllAss }) {
    
    if (ass.length > 1){
       return(
       <button className='del-btn' onClick={()=>DeleteAllAss()}>Delete All</button>
       )
    }
   
       return null
   
   }