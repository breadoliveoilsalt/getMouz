export function addAnotherOne() {
  console.log("You clicked the button!")
  return {
    type: 'ADD_ANOTHER_ONE',
    payload: 1
  }
}
