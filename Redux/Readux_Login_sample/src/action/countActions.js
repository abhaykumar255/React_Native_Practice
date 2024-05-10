import { COUNT_DECREASE, COUNT_INCREASE } from "../constants"
import React from "react"

export const increment = () =>{
    return {
        type : COUNT_INCREASE

    }
}
export const decrement = () => {
    return {
        type : COUNT_DECREASE
    }
}