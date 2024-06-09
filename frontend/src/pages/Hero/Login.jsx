import React, { useRef, useState, useContext } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../store/user-context";

const Login = () => {
    const {logIn}= useContext(UserContext)
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    logIn(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
        <input type="email" ref={emailRef} placeholder="Email" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={passwordRef} placeholder="Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <Button type={"submit"}>Log in</Button>
      </form>
    </>
  );
};

export default Login;
