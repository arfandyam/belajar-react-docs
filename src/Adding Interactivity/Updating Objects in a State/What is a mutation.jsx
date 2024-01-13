/**
 * State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects
 * that you hold in the React state directly. Instead, when you want to update an object, you need
 * to create a new one (or make a copy of an existing one), and then set the state to use that copy.
 * 
 * It’s not possible to make any changes to the built-in primitive values like numbers, strings, and booleans in JavaScript.
 * 
 * Now consider an object in state:
 * 
 *    const [position, setPosition] = useState({ x: 0, y: 0 });
 * 
 * Technically, it is possible to change the contents of the object itself. This is called a mutation:
 * 
 *    position.x = 5;
 * 
 * However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.
 */