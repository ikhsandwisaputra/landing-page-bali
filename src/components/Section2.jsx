export default function Section2() {
  return (
    <section className='w-full bg-zinc-900 h-[300px] flex justify-center items-center'>
      <div className='text-center font-montserrat text-white'>
        <h1 className='font-medium text-3xl mb-2'>Subscribe</h1>
        <p className='font-medium text-md mb-4'>Get New Notification</p>
        <form className='flex items-center'>
          <input
            type='text'
            className='py-2 px-3 mr-2 rounded border-none bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Enter your email'
          />
          <button className='bg-blue-600 py-2 px-4 rounded text-white font-medium'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
