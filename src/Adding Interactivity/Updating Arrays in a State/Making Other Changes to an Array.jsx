/**
 * There are some things you can’t do with the spread syntax and non-mutating methods like map() 
 * and filter() alone. For example, you may want to reverse or sort an array. The JavaScript 
 * reverse() and sort() methods are mutating the original array, so you can’t use them directly.
 * 
 * However, you can copy the array first, and then make changes to it.
 */

import { useState } from "react"

const initialLists = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function ReverseList(){
  const [list, setList] = useState(initialLists);
  
  function handleClick(){
    const nextList = [...list];
    nextList.reverse()
    setList(nextList);
  }

  return (
    <>
      <button onClick = {handleClick}>
        Reverse
      </button>
      <ul>
        {
          list.map(element => (
            <li key={element.id}>
              {element.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}

/**
 * However, even if you copy an array, you can’t mutate existing items inside of it directly. 
 * This is because copying is shallow—the new array will contain the same items as the original one.
 * So if you modify an object inside the copied array, you are mutating the existing state. 
 * For example, code like this is a problem.
 * 
 *    const nextList = [...list];
 *    nextList[0].seen = true; // Problem: mutates list[0]
 *    setList(nextList);
 * 
 * Although nextList and list are two different arrays, nextList[0] and list[0] point to the same 
 * object. So by changing nextList[0].seen, you are also changing list[0].seen. This is a state 
 * mutation, which you should avoid! You can solve this issue in a similar way to updating nested 
 * JavaScript objects—by copying individual items you want to change instead of mutating them. 
 * Here’s how.
 */