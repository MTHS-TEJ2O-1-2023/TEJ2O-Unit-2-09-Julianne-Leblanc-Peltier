/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program is a rock paper scissors game
*/

let randomNumber: number = 0
let score: number
score = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // if randomNumber was 0
  if (randomNumber === 0) {
    basic.showLeds(`
      . . . . .
      . # # # .
      . # # # .
      . # # # .
      . . . . .
      `)
  }

  // if randomNumber was 1
  if (randomNumber === 1) {
    basic.showLeds(`
      # # # # #
      # . . . #
      # . . . #
      # . . . #
      # # # # #
      `)
  }
  // if randomNumber was 2
  if (randomNumber === 2) {
    basic.showIcon(IconNames.Scissors)
  }

  // pause and show you are ready again
  basic.pause(5000)
  basic.showIcon(IconNames.Happy)
})

// Button A
input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

// Button B
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('Score: ')
  basic.showString(score.toString())
  basic.pause(5000)
  basic.showIcon(IconNames.Happy)
})
