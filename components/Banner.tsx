import React from 'react'
import type { BannerProps } from '../types/type'
import { urlFor } from '../sanity/lib/image'

const socialIcons: { [key: string]: React.ReactElement } = {
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    </svg>
  ),
  github: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0020.9 3S19.73 3 16 5.69a13.28 13.28 0 00-7 0C6.27 3 5.09 3 5.09 3a5.07 5.07 0 00.91 1.77 5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
  facebook: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
    </svg>
  ),
  instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  ),
}

export default function Banner({
  pretitle = 'Hi there! 👋 I’m',
  title = 'Husnain Rehman',
  description = 'I believe that collaboration and creativity are the essence of progress. And I am dedicated to bringing a fresh perspective to every project undertake.',
  primaryCta,
  secondaryCta,
  socialLinks,
  image,
  secondaryImage,
}: BannerProps) {
  const safePrimaryCta = primaryCta ?? { label: "Let's Talk", href: '#contact' }
  const safeSecondaryCta = secondaryCta ?? { label: 'Download CV', href: '#download' }
  const safeSocialLinks = socialLinks ?? [
    { platform: 'twitter', href: 'https://twitter.com' },
    { platform: 'linkedin', href: 'https://linkedin.com' },
    { platform: 'github', href: 'https://github.com' },
    { platform: 'facebook', href: 'https://facebook.com' },
  ]

  return (
    <section className="relative overflow-hidden bg-white pt-[100px] pb-90 mb-20">
       {(image || secondaryImage) && (
            <div className="hidden lg:flex items-center justify-center absolute bottom-0 left-0">
              <div className="relative w-[600px] h-[530px]">
                {image && (
                  <div className="absolute right-0 w-[80%] top-0 z-9 ">
                    <img
                      src={urlFor(image).width(597).height(653).url()}
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {secondaryImage && (
                  <div className="absolute left-0 bottom-0 w-[600px] h-[545px]">
                    <img
                      src={urlFor(secondaryImage).width(652).height(594).url()}
                      alt="Banner secondary"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="">
            <p className="text-sm uppercase tracking-[0.2em] mb-4 text-[var(--primary)] font-[600]">{pretitle}</p>
            <h1 className="text-5xl sm:text-6xl xl:text-[100px] mb-8 font-bold tracking-[0.1em] text-[var(--primary)]">
              {title}
            </h1>
            <div className="max-w-[940px] ml-auto">
              <p className=" text-base font-[600] max-w-[685px] leading-7 text-[#545b63] sm:text-lg mb-8">
                {description}
              </p>
              <div className='flex gap-4 items-center '>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href={safePrimaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-4 tracking-[0.1em] text-[17px] font-semibold text-white shadow-lg shadow-black/10 transition-all ease-in-out duration-500 hover:translate-y-[-1px] hover:opacity-95"
                  >
                    {safePrimaryCta.label}
                    <span className="ml-2 text-white">↗</span>
                  </a>
                  <a
                    href={safeSecondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] px-8 py-4 tracking-[0.1em] text-[17px] font-semibold text-[var(--primary)] transition-all ease-in-out duration-500 hover:bg-[var(--primary)] hover:text-white"
                  >
                    {safeSecondaryCta.label}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="20" viewBox="0 0 133 20" fill="none">
                    <path d="M0 19.5H131.999C127.999 17.6667 118.699 11.4 113.499 1" stroke="#0F0E0E" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  {safeSocialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href || (social as any).url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-200 bg-gray-200 text-[var(--primary)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                      aria-label={social.platform}
                    >
                      {socialIcons[social.platform.toLowerCase()] || socialIcons.twitter}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
