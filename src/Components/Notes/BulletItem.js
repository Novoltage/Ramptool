


export function BulletItem({ id, title, DeleteBullet }) {

    return (
        <li >
            <label>
               
                {title}
            </label>
            
            <button onClick={() => DeleteBullet(id)} className='del-btn'>Delete</button>
        </li>
    )

}