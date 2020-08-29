import React from 'react';
import {cleanup, fireEvent, render, wait} from '@testing-library/react';
import InputData from '../components/inputData';
import {Provider} from "react-redux";
import Store from "../redux/storage";


import {
  fortmatMilli,
  fortmatMilliTimer,
  convertMS,
  timeDiference,
  makeTwoDigitsNumbers,
  formatMoutData,
  getAllInputs,
  searchWarning,
  confirmWarning
} from "./index.js";

afterEach(cleanup);

describe("Time functions, calculate and formate", () =>{
  it("millis one digit",() => {
       
    expect(fortmatMilli(420000)).toBe("0:07");
    expect(fortmatMilli(1231244)).toBe("0:20");
  })

  it("millis two digits",() => {
       
    expect(fortmatMilliTimer(420000)).toBe("00:07:00");
    expect(fortmatMilliTimer(1231244)).toBe("00:20:31");
  })

  it("Object with converted time",() => {
       
    expect(convertMS(232345223)).toEqual({ 
    day: 2,
    hour: 16,
    minute: 32,
    seconds: 25
  });
    expect(convertMS(23232224143)).toEqual({
      day: 268,
      hour: 21,
      minute: 23,
      seconds: 44
    });
  })

  it("time diference",() => {

    const start = "01:13"
    const start2 = "23:13"
    const end = "03:24"
    const end2 = "01:24"
    const day = new Date().toString()
       
    expect(fortmatMilliTimer(timeDiference(start,end,day))).toBe("02:11:00");
    expect(fortmatMilliTimer(timeDiference(start2,end2,day))).toBe("02:11:00");
  })

  it("two digits",() => {
    const sample = "1"
    const sample2 = "10"
    const sample3 = "-1"
       
    expect(makeTwoDigitsNumbers(sample)).toBe("01");
    expect(makeTwoDigitsNumbers(sample2)).toBe("10");
    expect(makeTwoDigitsNumbers(sample3)).toBe("-01");
  })

  it("time for Date()",() => {
    const sample = "01:13"
    const sample2 = "23:13"
       
    expect(formatMoutData(sample)).toBe(sample+":00");
    expect(formatMoutData(sample2)).toBe(sample2+":00");
  })
})

// tests with UI-----------------


describe("Ui manipulation and scans", () =>{

  it("get all inputs",() => {
    render(
      <Provider store={Store}>
        <InputData />
      </Provider>
    )

    expect(getAllInputs()).toHaveLength(5);
  })
  it("search warning",async () => {
    render(
      <Provider store={Store}>
        <InputData />
      </Provider>
    )
    const arr = getAllInputs()

    expect(searchWarning(arr)).toBe(true);

    fireEvent.change(arr[0], { target: { value: '2020-02-21' } })

    expect(arr[0].value).toBe('2020-02-21')

    wait(() => expect(searchWarning(arr)).toBe(false))

  })
  it("confirm if there is any warnings",() => {
    render(
      <Provider store={Store}>
        <InputData />
      </Provider>
    )
    const arr = getAllInputs()

    expect(confirmWarning()).toBe(false);

    fireEvent.change(arr[0], { target: { value: '2020-02-21' } })

    expect(arr[0].value).toBe('2020-02-21')

    wait(() => expect(confirmWarning()).toBe(false))

    fireEvent.change(arr[1], { target: { value: '23:12' } })
    expect(arr[1].value).toBe('23:12')

    fireEvent.change(arr[2], { target: { value: '23:12' } })
    expect(arr[2].value).toBe('23:12')

    fireEvent.change(arr[3], { target: { value: '23:12' } })
    expect(arr[3].value).toBe('23:12')

    fireEvent.change(arr[4], { target: { value: '23:12' } })
    expect(arr[4].value).toBe('23:12')

    wait(() => expect(confirmWarning()).toBe(true))

  })
})