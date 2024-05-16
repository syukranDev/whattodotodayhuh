import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error('Error saving data', e);
    }
  };
  
  export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.error('Error retrieving data', e);
    }
    return null;
  };

  export const removeItemFromStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Item removed successfully!');
    } catch (e) {
      console.error('Error removing item:', e);
    }
  };
  