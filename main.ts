radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        a += 1
        if (a % 2 == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
    } else if (receivedNumber == 1) {
        b += 1
        if (b % 2 == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.M2)
        }
    }
})
let b = 0
let a = 0
radio.setGroup(105)
a = 0
b = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        maqueen.motorStop(maqueen.Motors.All)
        radio.sendNumber(9)
        basic.pause(100)
    }
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
