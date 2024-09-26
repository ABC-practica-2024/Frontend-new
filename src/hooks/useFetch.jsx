import { useState, useEffect } from "react";

const useFetch = (fetchFn, initialValue, ...params) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchFn(...params);
                const jsonData = response.data;
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData().then(r => r);
    }, [fetchFn, params]);

    return { data, setData, loading: isLoading, error };
};

export default useFetch;
