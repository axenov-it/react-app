import { CompanyInterface } from "common/interfaces";

const defaultValues: CompanyInterface = {
  name: "",
  address: "",
  phones: [],
  city: "",
  year: "",
};

export const useInitialValues = (company?: CompanyInterface) =>
  company || defaultValues;
