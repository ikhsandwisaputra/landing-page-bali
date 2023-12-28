export default function Header() {
    return (
        <header className="bg-[url(./assets/img/bali-2.jpg)] bg-cover bg-no-repeat bg-center w-full md:h-[1000px] h-fit pb-10 md:pb-0  bg-red-700 flex flex-col items-center md:justify-center relative">
              <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom left, rgba(0, 0, 0, 0%) 15%, rgba(0, 0, 0, 100%) 100%)' }}></div>
            <div className="md:w-1/2 w-full md:self-start md:ml-28 ml-0 p-5 md:p-0 md:mt-36 mt-32  relative text-center md:text-start">
            <h1 className="font-bold font-montserrat  text-white md:text-6xl text-4xl">Bali</h1>
            <p className="font-semibold text-white capitalize font-montserrat md:text-xl text-lg leading-6 mb-3">Discover the Magic: Join us on a Journey to Bali's Enchanting Paradise</p>
                <div className="rounded-sm bg-white w-[60px] h-[5px] mb-5 mx-auto md:mx-0"></div>
                <button className="bg-blue-700 rounded-full font-montserrat text-white px-4 py-2 font-medium">Join Now</button>
            </div>
            <div className="md:w-1/2 w-full md:p-0 p-5 md:mt-72 mt-5 text-center md:text-start relative">
                <h1 className="font-montserrat font-medium capitalize text-white md:text-4xl text-2xl ">Time to Travelling</h1>
                <p className="text-white font-medium capitalize md:text-1xl text-xl tracking-widest mb-14">Unleash Possibilities</p>
                <p className="font-montserrat text-white font-normal">Embark on an unforgettable journey to Bali's breathtaking beauty. Join us in embracing the warmth of its culture and the serenity of its landscapes. Bali is calling – answer the invitation to paradise!</p>
            </div>
        </header>
    )
}