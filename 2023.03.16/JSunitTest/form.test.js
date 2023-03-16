
const {test, expect} = require('@jest/globals')
const {checkJelszo} = require('./form')

test('password length should be the expected length', () => {
    let errArr = checkJelszo("123")
    let errNumber = errArr.length
    expect(errNumber).toBe(1)
})

test('password should contain a number', () => {
    let errArr = checkJelszo("asdasdasdasd")
    let errNumber = errArr.length
    expect(errNumber).toBe(1)
})

test('password should contain a number, and the length should be the expected length', () => {
    let errArr = checkJelszo("asda")
    let errNumber = errArr.length
    expect(errNumber).toBe(2)
})


