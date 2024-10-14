let car = {
    hasEngine : false,
    hasPaint : false,
    hasWheel : false,
}

function engine(car) {
    car.hasEngine = true;
    return car;
}

function paint(car) {
    car.hasPaint = true;
    return car;
}

function wheel(car) {
    car.hasWheel = true;
    return car;
}

function compose(fn1, fn2, fn3) {
    return function(result){
        return fn1(fn2(fn3(result)));
    }
}

let newCar = compose(engine, paint, wheel);
console.log(newCar(car));