def on_received_number(receivedNumber):
    global a, b
    if receivedNumber == 0:
        a += 1
        if a % 2 == 0:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        else:
            maqueen.motor_stop(maqueen.Motors.M1)
    elif receivedNumber == 1:
        b += 1
        if b % 2 == 0:
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        else:
            maqueen.motor_stop(maqueen.Motors.M2)
radio.on_received_number(on_received_number)

b = 0
a = 0
radio.set_group(105)
a = 0
b = 0

def on_forever():
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 0.1:
        maqueen.motor_stop(maqueen.Motors.ALL)
        radio.send_number(9)
        basic.pause(5000)
    basic.show_number(maqueen.ultrasonic(PingUnit.CENTIMETERS))
basic.forever(on_forever)
