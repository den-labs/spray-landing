import Link from 'next/link'

import { Particles } from '~/app/components'
import sprayIcon from '~/public/favicon.png'
import Image from 'next/image'

const mainnetAppUrl = 'https://modespray-mainnet.vercel.app/'
const canonicalSiteUrl = 'https://modespray.vercel.app/'

export function Home() {
  return (
    <div className="mb-8 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <Image
          src={sprayIcon}
          alt="icon of Mode Spray"
          width={96}
          height={96}
        />
      </div>
      <div className="animate-glow animate-fade-left from-mode/0 via-mode/50 to-mode/0 hidden h-px w-screen bg-gradient-to-r md:block" />
      <div className="flex">
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-white bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Mode
        </h1>
        <h1 className="text-edge-outline animate-title bg-mode z-10 cursor-default whitespace-nowrap bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Spray
        </h1>
      </div>

      <div className="animate-glow animate-fade-right from-mode/0 via-mode/50 to-mode/0 hidden h-px w-screen bg-gradient-to-r md:block" />
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <h2 className="text-balance p-4 text-sm text-zinc-500">
          Send Tokens to Multiple Addresses in One Click
        </h2>
        <div className="mx-auto mt-2 max-w-xl rounded-full border border-mode/40 bg-mode/10 px-4 py-2 text-xs text-zinc-200">
          New official link:{' '}
          <Link
            href={canonicalSiteUrl}
            className="font-semibold text-mode underline underline-offset-4"
          >
            modespray.vercel.app
          </Link>
          . We are no longer maintaining `modespray.xyz`.
        </div>
      </div>
      <div className="animate-fade-in my-16 flex flex-col text-center">
        <Link href={mainnetAppUrl} passHref target="_blank" rel="noreferrer">
          <span className="font-chakra text-neutral-content bg-mode mt-2 rounded-sm p-4 leading-tight">
            Launch
          </span>
        </Link>
      </div>
    </div>
  )
}
