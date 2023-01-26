import {useContext} from 'react';
import { EmplyeeContext } from '../contexts/EmployeeContext';

const useEmployeeContext = () => {
  const context = useContext(EmplyeeContext);

  return context;
}

export default useEmployeeContext;