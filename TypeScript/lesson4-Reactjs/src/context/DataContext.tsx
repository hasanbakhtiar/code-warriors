interface basicType {
  id: number;
  title: string;
}
const basicdata: basicType[] = [
    {
        id:1,
        title:"test"
    }
];

import { createContext } from "react";

export const DataContext = createContext<any | null>(null);

export const DataProvider: React.FC = ({ children }:any) => {
  
  return <DataContext.Provider value={basicdata}>{children}</DataContext.Provider>;
};
