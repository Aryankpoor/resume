import { createSlice } from "@reduxjs/toolkit"

const initialState Iproduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState
})