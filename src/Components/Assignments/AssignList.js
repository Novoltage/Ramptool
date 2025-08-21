import { Assignment} from "./Assignment"




export function AssignList({ ass, ToggleAss, DeleteAss }){
    return(
      
    <ul className='Alist'>
        {ass.length === 0 && "No Assignments" }
        {ass.map( ass => {
          return (
           <Assignment outbound={ass.outbound} id={ass.id} flight={ass.flight} key={ass.id} ToggleAss={ToggleAss} DeleteAss={DeleteAss} bags={ass.bags} />
          )
        })}
      </ul>
      
    )
}