export const sessionStorageUtil = {
  set: (key: string, value: any) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}"`, error);
    }
  },

  get: (key: string) => {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting sessionStorage key "${key}"`, error);
      return null;
    }
  },

  remove: (key: string) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}"`, error);
    }
  },
};
