import { type ReactNode } from 'react'

import Image from 'next/image'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import avatarImg from '@/public/images/avatar.webp'

type SocialLinkProps = {
  className?: string
  href: string
  children: ReactNode
  icon: (typeof Icons)[keyof typeof Icons]
}

const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) => {
  return (
    <li className={cn(className, 'flex')}>
      <a
        href={href}
        className="group flex items-center bg-zinc-200 bg-clip-text text-sm font-medium text-transparent transition hover:bg-gradient-to-r hover:from-bluePurple hover:to-lightBlue"
        rel="noopener noreferrer nofollow"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-bluePurple" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

const BlurBlob = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'absolute z-10 h-64 w-64 animate-blob rounded-full opacity-30 blur-xl filter',
        className
      )}
    />
  )
}

export default function Home() {
  return (
    <main className="flex w-full flex-col overflow-hidden pb-6">
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative mx-auto max-w-2xl px-4 sm:px-8 lg:max-w-5xl lg:px-12">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="relative mx-auto max-w-xs px-2.5 lg:max-w-none">
                  <BlurBlob className="animation-delay-2000 -left-4 -top-4 bg-bluePurple" />
                  <BlurBlob className="bottom-8 left-0 bg-lightBlue" />
                  <BlurBlob className="animation-delay-4000 -bottom-5 -left-5 bg-darkBlue" />

                  <BlurBlob className="animation-delay-4000 -right-4 -top-4 bg-deepRose" />
                  <BlurBlob className="bottom-8 right-0 bg-coralRed" />
                  <BlurBlob className="animation-delay-2000 -bottom-5 -right-5 bg-deepRose" />

                  <div className="relative z-20">
                    <Image
                      src={avatarImg}
                      alt="Gabriel Moraes"
                      width={600}
                      height={600}
                      priority
                      placeholder="blur"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-800 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:order-first lg:row-span-2">
                <h1 className="whitespace-nowrap text-3xl font-bold leading-tight lg:text-6xl">
                  Gabriel Moraes
                </h1>

                <h2 className="mt-2 lg:mt-3 lg:text-2xl">Software Engineer</h2>

                <div className="mt-4 leading-[1.8] text-zinc-400 md:max-w-xs lg:mt-9 lg:text-lg">
                  <p>Learning something new every day.</p>
                </div>
              </div>

              <div className="lg:pl-20">
                <ul role="list">
                  <SocialLink
                    href="https://github.com/gabrielnafuzi"
                    icon={Icons.Github}
                    className="mt-4"
                  >
                    GitHub
                  </SocialLink>

                  <SocialLink
                    href="https://linkedin.com/in/gabrielhenmoraes"
                    icon={Icons.LinkedIn}
                    className="mt-4"
                  >
                    LinkedIn
                  </SocialLink>

                  <SocialLink
                    href="mailto:gabriel.henmoraes@gmail.com"
                    icon={Icons.Mail}
                    className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                  >
                    gabriel.henmoraes@gmail.com
                  </SocialLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
