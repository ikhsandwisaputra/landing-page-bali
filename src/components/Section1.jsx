export default function Section1() {
  return (
      <section className="w-full h-fit py-20 bg-zinc-800">
          <div className="text-center mb-16 text-white font-montserrat">
          <h1 className="font-semibold md:text-4xl text-2xl p-2 capitalize">Popular destination in Bali</h1>
              <p className="font-medium md:text-2xl text-lg capitalize">Right Choice For Family</p>
              </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center md:gap-5">
              <div className="md:w-[400px] md:h-[500px] h-[400px]  m-3 md:m-0 flex items-end justify-center bg-[url(./assets/img/ubud.jpg)] bg-cover bg-no-repeat bg-center relative overflow-hidden group">
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0%) 50%, rgba(0, 0, 0, 75%) 100%)' }}></div>

                  <div className="text-center font-montserrat pb-10 relative transform md:translate-y-24 translate-y-32 group-hover:translate-y-0 transition-all duration-1000 ">
                      <h1 className="font-medium uppercase text-white text-2xl ">ubud</h1>
                      <p className="text-white font-medium uppercase text-md ">monkey forest, art museum & temple</p>
                 </div>
              </div>
              <div className=" md:w-[400px] md:h-[500px] h-[400px] m-3 md:m-0 flex items-end justify-center bg-[url(./assets/img/canggu.jpg)] bg-cover bg-no-repeat bg-center relative overflow-hidden group">
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0%) 50%, rgba(0, 0, 0, 75%) 100%)' }}></div>
                  <div className="text-center font-montserrat pb-10 relative transform md:translate-y-24 translate-y-32 group-hover:translate-y-0 transition-all duration-1000 ">
                      <h1 className="font-medium uppercase text-white text-2xl ">canggu</h1>
                      <p className="text-white font-medium uppercase text-md ">Canggu beach & Tanah Alot temple</p>
                 </div>
              </div>
              <div className=" md:w-[400px] md:h-[500px] h-[400px] m-3 md:m-0 flex items-end justify-center bg-[url(./assets/img/nusa-penida.jpg)] md:bg-contain bg-cover bg-no-repeat bg-center relative group overflow-hidden">
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0%) 50%, rgba(0, 0, 0, 75%) 100%)' }}></div>
                  <div className="text-center font-montserrat pb-10 relative transform md:translate-y-24  translate-y-32 group-hover:translate-y-0 transition-all duration-1000 ">
                      <h1 className="font-medium uppercase text-white text-2xl ">nusa penida</h1>
                      <p className="text-white font-medium uppercase text-md ">a quiet island off the coast of bali</p>
                 </div>
              </div>
          </div>
    </section>
  );
}
