"use client";

import {
	ToastProvider as RadixToastProvider,
	Toast,
	ToastViewport,
} from "@/components/toast";
import * as ToastPrimitives from "@radix-ui/react-toast";
import React, { createContext, useContext, useReducer } from "react";

// Criar o contexto para o estado dos toasts
const ToastStateContext = createContext();
const ToastDispatchContext = createContext();

const initialState = [];

function toastReducer(state, action) {
	switch (action.type) {
		case "ADD_TOAST":
			return [...state, action.payload];
		case "REMOVE_TOAST":
			return state.filter((toast) => toast.id !== action.payload);
		default:
			return state;
	}
}

export function ToastContextProvider({ children }) {
	const [state, dispatch] = useReducer(toastReducer, initialState);

	return (
		<ToastStateContext.Provider value={state}>
			<ToastDispatchContext.Provider value={dispatch}>
				<RadixToastProvider>
					{children}
					<ToastViewport />
					{state.map((toast) => (
						<Toast
							key={toast.id}
							{...toast}
							onOpenChange={(open) => {
								if (!open)
									dispatch({ type: "REMOVE_TOAST", payload: toast.id });
							}}
						/>
					))}
				</RadixToastProvider>
			</ToastDispatchContext.Provider>
		</ToastStateContext.Provider>
	);
}

export function useToast() {
	const dispatch = useContext(ToastDispatchContext);

	const show = (toast) => {
		const id = Math.random().toString(36).substr(2, 9);
		dispatch({ type: "ADD_TOAST", payload: { id, ...toast } });
	};

	return { show };
}
