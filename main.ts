radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 1) {
        Kitronik_Move_Motor.stop()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(750)
        basic.clearScreen()
    } else if (receivedNumber == 2) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 50)
        basic.pause(100)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 50)
        basic.pause(100)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 5) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # # .
            . . # # #
            `)
    } else if (receivedNumber == 6) {
        speed = 50
    } else if (receivedNumber == 7) {
        speed = 75
    }
})
let speed = 0
speed = 50
radio.setGroup(100)
basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    if (Kitronik_Move_Motor.measure() <= 5 && Kitronik_Move_Motor.measure() != 0) {
        Kitronik_Move_Motor.stop()
    }
})
