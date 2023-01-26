export type EmployeLoginType = {
  email: string;
  password: string;
}

export type EmployeeLoggedType = {
  access_token: string;
  employeeUuid: string;
}

export type EmployeeType = {
  uuid: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export type EmployeeContextType = {
  employeeLogged: EmployeeLoggedType | null;
  employee: EmployeeType | null;
  isLoading: boolean;
  signin: ({email, password}: EmployeLoginType) => void;
  signout: () => void;
}