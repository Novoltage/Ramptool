import { BulletItem } from "./BulletItem"

export function BulletList({ bullets, DeleteBullet }){
    return(
      
    <ul className='bullet-list'>
        {bullets.length === 0 && "No Items" }
        {bullets.map( bullet => {
          return (
           <BulletItem id={bullet.id} title={bullet.title} key={bullet.id} DeleteBullet={DeleteBullet} />
          )
        })}
      </ul>
      
    )
}