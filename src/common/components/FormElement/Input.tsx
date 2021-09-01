import "react-app-polyfill/ie11";
import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  value?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapClassName?: string;
  errorClassName?: string;
}

const Input = ({
  label,
  labelClassName,
  inputClassName,
  wrapClassName,
  errorClassName,
  ...props
}: Props) => {
  const [field, meta] = useField(props as any);

  const { name } = props;

  return (
    <div className={wrapClassName}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        name={name}
        id={name}
        className={inputClassName}
        placeholder={label}
      />
      {meta.touched && meta.error ? (
        <div className={errorClassName}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
