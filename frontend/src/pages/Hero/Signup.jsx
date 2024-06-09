import React, { useRef, useState, useContext } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../store/user-context";

const Signup = () => {
    const {signUp} = useContext(UserContext)
    const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatpasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatedPassword = repeatpasswordRef.current.value;

    signUp(name, email, password, repeatedPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
      <input type="text" ref={nameRef} placeholder="Your Name" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="email" ref={emailRef} placeholder="Your Email" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={passwordRef} placeholder="Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={repeatpasswordRef} placeholder="Repeated Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <Button type={"submit"}>Sign up</Button>
      </form>
    </>
  );
};

export default Signup;
