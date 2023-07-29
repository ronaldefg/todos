import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (localStorageItem) {
                    parsedItem = JSON.parse(localStorageItem);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }
                setItem(parsedItem);
            } catch(error) {
                setError(true);
            }
            setLoading(false);
        }, 1000)
    });
    const saveItem = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItem(newItems);
    };
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export {useLocalStorage};