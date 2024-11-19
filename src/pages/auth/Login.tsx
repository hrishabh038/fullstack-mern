import React, { useState } from "react";
import Box1 from "../../containers/Box1";
import InputArea from "../../components/InputArea";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

interface Props {}

const Login = (props: Props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleClick(){
   console.log(data)
  }
  return (
    <div className="w-full h-full  flex items-center justify-center p-4">
      <Box1 className="p-6 w-[350px] flex flex-col gap-4">
        <div className="flex flex-col gap-1 mb-2 text-center">
            <p className="text-2xl font-bold">Welcome back</p>
            <p className="text-neutral-400 text-xs">Glad to see you again<br></br>Login to your account below</p>
        </div>
        <InputArea
          label="Email"
          placeholder="example@company.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
        />
        <InputArea
          label="Password"
          placeholder="********"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
        />
        <Button className="mt-3" onClick={handleClick}>
            <>Login</>
        </Button>

        <p className="text-xs text-neutral-600 flex items-center gap-2 text-center justify-center mt-4">Don't have an acount? <Link className="text-purple-500" to={"/auth/register"}>Signup</Link></p>
      </Box1>
    </div>
  );
};

export default Login;
