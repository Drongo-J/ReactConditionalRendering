// import React from 'react'

// const people = [
//     "Ayxan : Full Stack Developer",
//     "Ali Alili : IT Specialist",
//     "Togrul Babayev : Designer",
//     "Aysel Memmedova : Crator",
//     "Meryem Hacizade : Marketing"
// ];

// const listItems = people.map(person => <li>{person}</li>);

// export default function ListItems() {
//   return (
//     <div>
//       <ul>
//         {listItems}
//       </ul>
//     </div>
//   )
// }

import React from 'react'
import {people} from "./data.js"
import { getImageUrl } from './Utils.js';

const persons = people.filter(p => p.imageId >= 1);
const listItems = persons.map(person =>
    <li>
        <img className='user-img' src={getImageUrl(person)} alt={person.name}></img>
        <h3>Name : {person.name}</h3>
        <h4>Profession : {person.profession}</h4>
        <hr/>
    </li>
);

export default function ListItems() {
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
