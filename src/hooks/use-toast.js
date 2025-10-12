import { useState, useCallback, useEffect } from 'react';

let toastCount = 0;
let globalToastListeners = [];

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, description, variant = 'default', duration = 5000 }) => {
    const id = toastCount++;
    const newToast = { id, title, description, variant };
    
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toastFn = useCallback((props) => {
    return addToast(props);
  }, [addToast]);

  // Register this hook instance as the global toast handler
  useEffect(() => {
    globalToastListeners.forEach(fn => fn(toastFn));
    
    return () => {
      globalToastListeners = [];
    };
  }, [toastFn]);

  return {
    toast: toastFn,
    toasts,
    addToast,
    removeToast,
  };
}

// Global toast function that can be imported and used directly
let globalToastFn = null;

export function toast(props) {
  if (globalToastFn) {
    return globalToastFn(props);
  }
  
  // Queue the toast to be called once the hook is mounted
  return new Promise((resolve) => {
    globalToastListeners.push((fn) => {
      globalToastFn = fn;
      resolve(fn(props));
    });
  });
}
