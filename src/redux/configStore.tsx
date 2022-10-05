import {configureStore, PayloadAction} from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { Store } from "antd/lib/form/interface";


export const store = configureStore ({
    reducer: {

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 