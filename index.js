const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']  //array of drivers

const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = number => {
    return function(fare) {
        return fare * number
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(drivers)
}