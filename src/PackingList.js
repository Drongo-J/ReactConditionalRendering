import React from 'react'

// Conditional Renderings
function Item({name, isPacked}){
    // V1
    if (isPacked){
        return <li className="item">{name} <img className='icon' src='https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png' alt='img'></img></li>
    }
    return <li className="item">{name}</li>
    // return null;

    // V2
    // return <li className="item"> {name}
    //     {isPacked ? (<img className='icon' src='https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png' alt='img'></img>) : ""}
    // </li>

     // V3
    // return <li className="item"> {name}
    //     {isPacked && (<img className='icon' src='https://static.vecteezy.com/system/resources/previews/009/362/738/original/tick-icon-accept-approve-sign-design-free-png.png' alt='img'></img>)}
    // </li>
}

export default function PackingList() {
  return (
   <section>
        <h1>
            Aykhan's Package List            
        </h1>
        <ul>
            <Item isPacked={true} name="Space Suit"></Item>
            <Item isPacked={true} name="Helmet with a Golden Leaf"></Item>
            <Item isPacked={false} name="Photo of Child"></Item>
        </ul>
   </section>
  )
}
