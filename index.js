function distanceFromHqInBlocks(pickup){

    return Math.sqrt(Math.pow(pickup-42,2))
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup)*264
}

function distanceTravelledInFeet(pickup, dropoff){
    return Math.sqrt(Math.pow(pickup-dropoff,2))*264
}

function calculatesFarePrice(pickup, dropoff){
    let distance = distanceTravelledInFeet(pickup, dropoff)
    console.log("Distance: " + distance + "ft");
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance-400)*.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}