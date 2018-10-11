# Advanced Typescript

## Desctructuring arrays

`let colors: string[] = ['green', ' yellow', 'blue'];`
`let [firstColor, secondColor, thirdColor] = colors;`

## Desctructuring objects

`let person = {
    name: 'Bart',
    address: '123 High Street'
    phone: '333-444-555'};`
`let { name, address phone } = person;`

## Spread operator

`let newBookIds = [10, 20];`
`let allBookIds = [1, 2, 3 ...newBookIds];`
`//  [1, 2, 3, 10, 20]`

### Tuple types

`interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}`
`let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];`

### Union types

`function printId(id: string | number){ console.log(id);  }`

### Intersection types

`function createPhablet(): Phone & Tablet {  
    // phablet is born
    // return type has all members of Phone & Tablet types
}`
