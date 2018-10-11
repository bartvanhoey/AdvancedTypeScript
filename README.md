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

### Tuple Types


