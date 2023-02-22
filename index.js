
function distanceFromHqInBlocks(location) {
    const comp = [location, 42]
    return (Math.max(...comp) - Math.min(...comp))
}


function distanceFromHqInFeet(location) {
     return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(loc1, loc2) {
    const comp = [loc1, loc2]
    return (Math.max(...comp) - Math.min(...comp)) * 264
}

function calculatesFarePrice(loc1, loc2) {
    const comp = [loc1, loc2]
    const dist = (Math.max(...comp) - Math.min(...comp)) * 264
    if (dist <= 400) {
        return 0
    } else if (dist > 400 && dist <= 2000) {
        return (dist - 400) * 0.02
    } else if (dist > 2000 && dist <= 2500) {
        return 25
    }else {
        return `cannot travel that far`
    }
}