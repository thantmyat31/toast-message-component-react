import React, {useCallback, useEffect} from 'react';
import styles from './ToastMessage.module.css';

export function ToastMessage({ toasts, setToasts }) {
    const duration = 3000;

    const deleteToast = useCallback((item) => {
        let filteredToasts = toasts.filter(t => t !== item);
        setToasts(filteredToasts);
    }, [toasts, setToasts]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(toasts.length) {
                deleteToast(toasts[0]);
            }
        }, duration);
    
        return () => {
            clearInterval(interval);
        }
    },[toasts, deleteToast]);

    return (
        <div className={styles.container}>
            {
                toasts.length ?
                toasts.map((value, index) => {
                    let className = '';
                    if(value.condition === 'success') className = styles.success;
                    else if(value.condition === 'error') className = styles.error;
                    else if(value.condition === 'warn') className = styles.warn;
                    else className = '';

                    return (
                        <div key={index} 
                            className={`${styles.toast} ${className}`} 
                            onClick={() => deleteToast(value)}
                        >{value.text}</div>
                    )
                }) :
                <div></div>
            }
        </div>
    )
}