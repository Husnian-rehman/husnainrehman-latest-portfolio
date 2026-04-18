import { urlFor } from '../sanity/lib/image'
import type { AboutUsProps } from '../types/type'

export default function AboutUs({
  title,
  description,
  experienceText,
  image,
  link,
}: AboutUsProps) {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className='max-w-[1400px] px-5 mx-auto'>
          <div>
            <div className="flex items-center gap-3">
                <span className="block h-0.5 w-14 bg-black" />
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#0f172a]">
                {title}
                </h2>
            </div>
            <p className="text-[52px] leading-[1.2] text-[var(--primary)] font-[600] mt-[50px] mb-[35px]">
            {description}
            </p>
          </div>
            <div className='flex gap-10'> 
                <div className="w-[50%] pl-30 relative">
                    <svg className='absolute top-0 left-0' xmlns="http://www.w3.org/2000/svg" width="45" height="339" viewBox="0 0 45 339" fill="none">
                    <path d="M1 1V338C8.90805 305.345 20 295 44 284.711" stroke="#0F0E0E" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div className="mb-20">
                        <p className="text-[200px] mb-[50px] leading-none font-bold text-[#000]">
                         {experienceText}
                        </p>
                        <p className='text-[70px] leading-none font-bold text-[var(--primary)]'>Years Experience</p>
                    </div>
                    {link?.label && link?.href ? (
                        <a
                        href={link.href}
                        className="inline-flex items-center justify-center rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none bg-[var(--primary)] p-2 max-w-[150px] h-[70px] w-full text-[14px] font-semibold text-white transition hover:opacity-95"
                        >
                        {link.label}
                        <span className="ml-2 text-white">↗</span>
                        </a>
                    ) : null}
                </div>
                <div className="relative w-[50%] overflow-hidden  bg-[var(--primary)] pt-3  rounded-tl-none rounded-tr-[40px] rounded-bl-[40px] rounded-br-none">
                {image ? (
                <div className=" overflow-hidden ">
                    <img
                    src={urlFor(image).width(960).height(960).url()}
                    alt={title || 'About image'}
                    className="h-full w-full object-cover"
                    />
                </div>
                ) : null}
            </div>

          </div>
            
      </div>
    </section>
  )
}
