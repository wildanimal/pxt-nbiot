nbiot.onReceivedString(function (text) {
    basic.showString(nbiot.readLine())
    basic.showIcon(IconNames.SmallSquare)
})
nbiot.onConnected(function () {
    basic.showIcon(IconNames.Yes)
    nbiot.sendString("Hello World!")
})
input.onButtonPressed(Button.A, function () {
    //basic.showString(nbiot.imei())
    // basic.showString(nbiot.imei()) nbiot.writeCommand(
    // "AT+CGSN=1", 0, 0, 0 )
    // basic.showString(nbiot.readLine())
    nbiot.sendString("gps  path:19/0/0, payload:40240000000000004024000000000000")
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    // basic.showString(nbiot.imsi())
    nbiot.sendString("nurse  path:19/0/0, payload:00000169873b3fe800000169873b43d0")
    basic.showIcon(IconNames.Tortoise)
})
basic.showIcon(IconNames.SmallHeart)
nbiot.connect(SerialPin.P8, SerialPin.P12)
basic.pause(1000)
// nbiot.setServer("221.229.214.202", 5683)
// basic.pause(1000)
basic.showIcon(IconNames.Heart)
basic.forever(function () {

})
