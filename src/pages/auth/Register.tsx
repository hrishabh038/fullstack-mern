import React, { useState } from "react";
import Box1 from "../../containers/Box1";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

interface Props {}

const Register = (props: Props) => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  });
  function handleClick() {
    console.log(data);
  }
  return (
    <div className="w-full h-full  flex items-start sm:items-center justify-center p-4">
      <Box1 className="p-6 w-[350px] sm:w-[600px] flex flex-col gap-4">
        <div className="flex flex-col gap-1 mb-2 text-center">
          <p className="text-2xl font-bold">Creat your account</p>
          <p className="text-neutral-400 text-xs">
            Get started by entering<br></br>your details below
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <InputArea
            label="Firstname"
            placeholder="Jhon"
            value={data.firstname}
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
          />
          <InputArea
            label="Lastname"
            placeholder="Doe"
            value={data.lastname}
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <InputArea
            label="Email"
            placeholder="example@company.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <InputArea
            label="Phone Number"
            placeholder="+91 987654321"
            value={data.phone_number}
            onChange={(e) => setData({ ...data, phone_number: e.target.value })}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <InputArea
            label="Password"
            placeholder="cjvnfowl87y#$#"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
          />
          <InputArea
            label="Confirm Password"
            placeholder="*************"
            value={data.confirm_password}
            onChange={(e) => setData({ ...data, confirm_password: e.target.value })}
            type="password"
          />
        </div>
        <Button className="mt-3" onClick={handleClick}>
          <>Sign up</>
        </Button>

        <p className="text-xs text-neutral-600 flex items-center gap-2 text-center justify-center mt-4">
          Already have an acount?{" "}
          <Link className="text-purple-500" to={"/auth/login"}>
            Login
          </Link>
        </p>
      </Box1>
    </div>
  );
};

export default Register;
