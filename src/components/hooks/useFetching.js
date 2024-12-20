import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error) {
            setError(error.message); // Встановлюємо текст помилки
        } finally {
            setIsLoading(false); // Завершуємо стан завантаження
        }
    };

    // Повертаємо масив із функцією fetching, isLoading та error
    return [fetching, isLoading, error];
};