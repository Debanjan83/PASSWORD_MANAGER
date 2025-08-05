const Navbar = () => {
    return (
        <nav className='bg-slate-800  text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                <button className="cursor-pointer text-white bg-green-600 hover:bg-green-500 my-5 rounded-full flex justify-center items-center ring-white ring-1">
                    <img className="invert p-1 w-10" src="icons/github.svg" alt="Github" />
                    <span className="font-bold px-2">Github</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
