import { useRef, useContext, useState } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../store/user-context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
    const {signUp} = useContext(UserContext)
    const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatpasswordRef = useRef();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatedPassword = repeatpasswordRef.current.value;

    if(password !== repeatedPassword){
      setErrorMessage("Passwords do not match.")
    }

    try {
      setButtonDisabled(true);
      await signUp(name, email, password, repeatedPassword);
      setButtonDisabled(false);
      navigate("/signin");
    } catch(err) {
      setErrorMessage(err.message);
      setButtonDisabled(false);
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
      <input type="text" ref={nameRef} placeholder="Your Name" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="email" ref={emailRef} placeholder="Your Email" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={passwordRef} placeholder="Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <input type="password" ref={repeatpasswordRef} placeholder="Repeated Password" required className="bg-background p-2 text-base font-[400] border-2 border-background rounded-sm transition-all duration-200 hover:border-2 hover:border-slate-200" />
        <Button type={"submit"} disabled={buttonDisabled}>Sign up</Button>
        {errorMessage && <p className="p-2 text-xs font-[700] text-red-700">{errorMessage}</p>}
      </form>
    </>
  );
};

export default Signup;
