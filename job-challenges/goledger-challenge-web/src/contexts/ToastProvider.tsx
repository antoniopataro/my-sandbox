import React, { useState, useEffect, createContext } from "react";

interface ToastContextProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  toast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToastContext = createContext({} as ToastContextProps);

interface ToastProviderProps {
  children: React.ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  }, [toast]);

  return <ToastContext.Provider value={{ message, setMessage, toast, setToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
