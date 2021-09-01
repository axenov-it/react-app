import { CompanyInterface } from "common/interfaces";

import { FormikHelpers } from "formik";

import { useFetch } from "common/hooks";

export const useSubmit = () => {
  const [editCompanyQuery, editCompanyQueryStatus] = useFetch(true, 2000);

  const onSubmit = (
    values: CompanyInterface,
    { setSubmitting, resetForm }: FormikHelpers<CompanyInterface>
  ) => {
    editCompanyQuery("http://learn.api.axenov-it.com/companies", {
      method: "POST",
      body: JSON.stringify(values),
    });

    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return [onSubmit, editCompanyQueryStatus];
};
