import Button from "../../components/Button";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return ( 
        <section className="min-h-screen w-full flex flex-col justify-center items-center gap-2 p-5">
            <header className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-[700] text-5xl uppercase  text-transparent from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text">Error 404</h1>
                <p className="font-[300] text-xl ">We cannot find what you looking for :/ Page do not exist</p>
            </header>
            <Link to="/"><Button>Back to homepage</Button></Link>
        </section>
    );
}
 
export default ErrorPage;