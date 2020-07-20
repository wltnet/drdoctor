import * as React from "react";
import { useHistory } from "react-router-dom";
import { Form, InputWrapper, Input, Label, Error } from "./styled";
import { isEmpty, isValidDate, isValidPostcode } from ".";

type DataProps = {
  [key: string]: string;
};

const Login = (): React.ReactElement => {
  let history = useHistory();

  localStorage.removeItem("onetimecode");
  localStorage.removeItem("token");

  const initialState: DataProps = {
    lastname: "",
    dateOfBirth: "",
    postcode: "",
  };

  const [values, setValues] = React.useState<DataProps>(initialState);
  const [errors, setErrors] = React.useState<DataProps>(initialState);
  const [showErrors, setShowErrors] = React.useState<boolean>(false);

  const validate = (name: string, value: string) => {
    switch (name) {
      case "lastname":
        setErrors((prevState) => ({
          ...prevState,
          lastname: isEmpty(value) ? "Must not be empty field" : "",
        }));
        break;
      case "dateOfBirth":
        setErrors((prevState) => ({
          ...prevState,
          dateOfBirth: isValidDate(value) ? "" : "Invalid date",
        }));
        break;
      case "postcode":
        setErrors((prevState) => ({
          ...prevState,
          postcode: isValidPostcode(value) ? "" : "Invalid post code",
        }));
        break;
    }
  };

  const onChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.target as HTMLInputElement;

    validate(name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    Object.keys(values).forEach((objKey) => {
      validate(objKey, values[objKey]);
    });

    if (
      values.lastname !== "" &&
      values.dateOfBirth !== "" &&
      values.postcode !== "" &&
      errors.lastname === "" &&
      errors.dateOfBirth === "" &&
      errors.postcode === ""
    ) {
      localStorage.setItem("onetimecode", "authorised");
      history.push("/onetimecode");
    }

    setShowErrors(true);
    return false;
  };

  return (
    <section>
      <Form onSubmit={onSubmit} noValidate>
        <InputWrapper>
          <Label htmlFor="lastname">Last Name:</Label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            maxLength={50}
            value={values.lastname}
            onChange={onChange}
            error={errors.lastname}
            required
          />
          {showErrors && errors.lastname && <Error>{errors.lastname}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="dateOfBirth">Date of Birth:</Label>
          <Input
            id="dateOfBirth"
            type="text"
            name="dateOfBirth"
            maxLength={10}
            value={values.dateOfBirth}
            onChange={onChange}
            error={errors.dateOfBirth}
            placeholder="dd/mm/yyyy"
            required
          />
          {showErrors && errors.dateOfBirth && (
            <Error>{errors.dateOfBirth}</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="postcode">Post Code:</Label>
          <Input
            id="postcode"
            type="text"
            name="postcode"
            maxLength={8}
            value={values.postcode}
            onChange={onChange}
            error={errors.postcode}
            placeholder="e.g. SE1 7LL"
            required
          />
          {showErrors && errors.postcode && <Error>{errors.postcode}</Error>}
        </InputWrapper>
        <button type="submit">Login</button>
      </Form>
    </section>
  );
};

export default Login;
