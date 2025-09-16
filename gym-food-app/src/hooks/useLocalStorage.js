import { useState } from "react";

// Custom hook для работы с localStorage
export const useLocalStorage = (key, initialValue) => {
  // Состояние для хранения значения
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Попытаться получить значение из localStorage
      const item = localStorage.getItem(key);
      // Если значение существует, распарсить его, иначе вернуть initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Если ошибка, вернуть initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Функция для установки значения
  const setValue = (value) => {
    try {
      // Если value - функция, вызвать её с текущим значением
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Сохранить в состоянии
      setStoredValue(valueToStore);

      // Сохранить в localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Функция для удаления значения
  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};
