import React, {
    useContext,
    createContext,
    useState,
    useEffect,
    ReactNode

} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY } from '../config/storage';

interface IStorageDataContext {
    
    setLogin(data: string): Promise<void>;
    getLogins(): Promise<string|null>;
}
interface  StorageDataProviderProps{
    children: ReactNode;
}
export const StorageDataContext = createContext({} as IStorageDataContext);


function StorageDataProvider({ children }: StorageDataProviderProps){
    async function setLogin(data: string){
        await AsyncStorage.setItem(KEY, data);
    }
    async function getLogins(){
        const response = await AsyncStorage.getItem(KEY);
        return response;
    }
    return (
        <StorageDataContext.Provider
        value ={{
            setLogin,
            getLogins
        }}
        >
            {children}
        </StorageDataContext.Provider>
    );
}
function useStorageData(){
    const context = useContext(StorageDataContext);
    return context;
}
export { StorageDataProvider, useStorageData };