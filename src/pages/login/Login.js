import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { userRegisterInput } from "../../assets/inputFields";
import { Button } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./loginAction";

export const Login = () => {
  const loginFields = userRegisterInput.filter(
    (field) => field.name === "email" || field.name === "password"
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [frmData, setFrmData] = useState({});
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.uid && navigate("/dashboard");
  }, [user, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(frmData));
  };

  return (
    <MainLayout>
      <div>
        <Form
          onSubmit={handleOnSubmit}
          className="mb-3 border p-5 shadow-lg rounded m-auto bg-light "
          style={{ width: "400px" }}
          controlId="formBasicEmail"
        >
          <h2 className="fw-bolder">Welcome Back! please Login</h2>
          {loginFields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
