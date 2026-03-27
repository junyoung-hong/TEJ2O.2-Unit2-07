/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Mar 2026
 * This program is cookie clicker
*/

// variables 
let cookies: number = 0

// start up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// press A
input.onButtonPressed(Button.A, function() {
    cookies += 1
    basic.showString(cookies.toString())
})

// press B
input.onButtonPressed(Button.B, function() {
    cookies = 0
    basic.showString(cookies.toString())
})
