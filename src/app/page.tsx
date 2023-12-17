import Image from 'next/image'
import MisteryBox from '@/app/MysteryBox'
export default function Home() {
  return (
    <main >
      <div className=' container relative bg-black'>
        <Image src={"/bg2.jpeg"} alt="bg" width={0} className=' w-full object-cover h-1/3 opacity-40' height={200} unoptimized />
        <div className='flex gap-2 justify-center items-center absolute top-1/4 left-5 right-5'>
          <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">Welcome</p>
          <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">To</p>
          <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">MystiReveal.com </p>
        </div>

        <div className='absolute top-1/3 w-screen bg-black p-10  shadow-2xl mt-10 animate-pulse '>
          <p className=' text-center text-2xl font-bold  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto]'>Unleash your curiosity and ask us anything... No Question is too thrilling or mysterious for us to unravel together!</p>
        </div>

        <div className='bg-black text-blue-200 text-lg  absolute w-screen text-center top-2/3 italic '>
          <p><b>Note</b>: Before asking any questions, please enter the following phrase in the petition box.</p>
          <p className='font-bold'>Please Unravel the Mystery by answering the following Question</p>
        </div>
        
        </div>
        <MisteryBox/>
    </main>
  )
}

