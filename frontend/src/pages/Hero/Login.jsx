import { useRef, useContext, useState } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../store/user-context";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState();
    const {logIn}= useContext(UserContext)
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
        setErrorMessage();
        await logIn(email, password);
    }
    catch(err) {
        setErrorMessage(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
        <input type="email" ref={emailRef} placeholder="Email" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={passwordRef} placeholder="Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <Button type={"submit"}>Log in</Button>
        {errorMessage && <p className="p-2 text-xs font-[700] text-red-700">{errorMessage}</p>}
      </form>
    </>
  );
};

export default Login;
