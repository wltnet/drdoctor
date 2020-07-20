import * as React from "react";
import { useHistory } from "react-router-dom";
import { Form, InputWrapper, Input, Fieldset, Error } from "./styled";

type DataProps = {
  [key: string]: string;
};

const data: DataProps = {
  mobile: "+44 xxxxxxx1212",
  landline: "+44 xxxxxxx3434",
  email: "ab*****@hotmail.com",
};

const OneTimeCode = (): React.ReactElement => {
  let history = useHistory();
  const [submitCode, setSubmitCode] = React.useState<boolean>(false);
  const auth = localStorage.getItem("onetimecode");

  const initialState: DataProps = {
    contact: "",
    code: "",
  };

  const [values, setValues] = React.useState<DataProps>(initialState);
  const [errors, setErrors] = React.useState<DataProps>(initialState);

  const onClick = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (values.contact !== "") {
      setErrors({ ...errors, contact: "" });
      setSubmitCode(true);
    } else {
      setErrors({ ...errors, contact: "Please select contact method" });
    }
  };

  const onChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (values.code === "0000") {
      localStorage.setItem("token", "authorised");
      history.push("/welcome");
    }

    setErrors({ ...errors, code: "Invalid one-time code" });
    return false;
  };

  if (!auth) {
    history.push("/");
  }

  return (
    <section>
      <Form>
        <Fieldset>
          <legend>
            Please select a contact method for receiving the one-time code
          </legend>
          {Object.keys(data).map((objKey) => (
            <InputWrapper key={objKey}>
              <input
                type="radio"
                id={objKey}
                name="contact"
                value={objKey}
                onChange={onChange}
                required
              />
              <label htmlFor={objKey}>{data[objKey]}</label>
            </InputWrapper>
          ))}
        </Fieldset>
        {errors.contact && <Error>{errors.contact}</Error>}
        <button type="submit" onClick={onClick}>
          {submitCode ? "Resend code" : "Send code"}
        </button>
        {submitCode && (
          <>
            <label htmlFor="code">
              <Input
                type="text"
                id="code"
                name="code"
                value={values.code}
                onChange={onChange}
                placeholder="Please enter the one-time code here"
                required
              />
              {errors.code && <Error>{errors.code}</Error>}
            </label>
            <button type="submit" onClick={onSubmit}>
              Submit code
            </button>
          </>
        )}
      </Form>
    </section>
  );
};

export default OneTimeCode;
