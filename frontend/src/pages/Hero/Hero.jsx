import { Outlet, Link } from 'react-router-dom'; 
import Button from '../../components/Button';

const Hero = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <header className='flex flex-col justify-center items-center from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text'>
                    <h1 className='font-[700] text-5xl uppercase  text-transparent'>AI Assistant</h1>
                    <p className='font-[300] text-xl '>Get thing done quicker and easier using your personal AI assistant.</p>
                </header>
                <div className='flex gap-5 justify-center items-center'>
                    <Link to="/signin"><Button>LOG IN</Button></Link>
                    <Link to="/signup"><Button>SIGN UP</Button></Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Hero;