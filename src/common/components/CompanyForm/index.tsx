import "react-app-polyfill/ie11";
import { Formik, Form } from "formik";
import { CompanyInterface } from "common/interfaces";
import { useInitialValues, useSubmit } from "./hooks";
import { Input } from "common/components";

import styles from "./styles.module.scss";

interface Props {
  company?: CompanyInterface;
}

const CompanyForm = ({ company }: Props) => {
  const initialValues = useInitialValues(company);
  const [onSubmit, fetchStatus]: any = useSubmit();

  console.log("RERENDER COMPANY FORM");

  return (
    <div className={styles.form}>
      <h4>{fetchStatus}</h4>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Input
            label="Enter Name"
            name="name"
            inputClassName={styles.form__input}
            labelClassName={styles.form__label}
          />

          <Input
            label="Enter city"
            name="city"
            inputClassName={styles.form__input}
            labelClassName={styles.form__label}
          />

          <Input
            label="Enter address"
            name="address"
            inputClassName={styles.form__input}
            labelClassName={styles.form__label}
          />

          <Input
            label="Enter year"
            name="year"
            inputClassName={styles.form__input}
            labelClassName={styles.form__label}
          />

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CompanyForm;
