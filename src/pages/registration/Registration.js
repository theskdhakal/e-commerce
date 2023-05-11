import React, { useState } from "react";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { userRegisterInput } from "../../assets/inputFields";

export const Registration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();

      const { confirmPassword, password, ...rest } = form;
      if (confirmPassword !== password) {
        return toast.error("password do not match");
      }

      console.log(form);
    } catch (error) {}
  };

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="mb-3 border p-5 shadow-lg rounded m-auto bg-light "
        style={{ width: "400px" }}
        controlId="formBasicEmail"
      >
        <h2 className="fw-bolder">Join the admin panel now!</h2>
        {userRegisterInput.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
