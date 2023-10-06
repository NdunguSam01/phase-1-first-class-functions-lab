// Code your solution in this file!
const drivers=["Samuel", "Daniel", "Benson","David"]

const returnFirstTwoDrivers=(array)=>
{
    return array.slice(0,2)//Slicing the first two elements
}

const returnLastTwoDrivers=(array)=>
{
    return array.slice(-2)//Slicing the last two elements
}

let selectingDrivers=[]//Initializing the array
selectingDrivers[0]=returnFirstTwoDrivers//Assigning the returnFirstTwoDrivers function as the first array element
selectingDrivers[1]=returnLastTwoDrivers//Assigning the returnFirstTwoDrivers function as the second array element

//Invoking either function from the array using the array index and passing the drivers array as the argument for the function
console.log(selectingDrivers[0](drivers))
console.log(selectingDrivers[1](drivers))

const selectDifferentDrivers=(array, callbackFunction)=>
{
    return callbackFunction(array)
}
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))

const createFareMultiplier=(multiplier)=>
{
    return (fare)=>
    {
        return multiplier*=fare
    }
}
console.log(createFareMultiplier(5)(5))

const fareDoubler=(fare)=>
{
    return fare*=2
}
console.log(fareDoubler(4))

const fareTripler=(fare)=>
{
    return fare *=3
}
console.log(fareTripler(4))