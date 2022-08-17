import Image from 'next/future/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header() {
  return (
    <header id="_header">
      <div id="_header-inner">
        <Link href="/" className="-ml-px inline-flex flex-col items-end">
          <Image
            src="/images/pokemon-logo.png"
            width={320 * 0.48}
            height={118 * 0.48}
            quality={30}
            alt="Pokemon logo"
            className="h-auto w-20 lg:w-[154px]"
          />
          <div className="-mt-1 inline-block -rotate-6 border border-white bg-gradient-to-br from-sky-600 to-pink-600 px-1.5 text-[9px] font-bold tracking-widest text-white lg:px-3 lg:text-base">
            AWESOME
          </div>
        </Link>

        <div className="flex items-center gap-3 self-center">
          <a
            href="https://github.com/afiiif"
            title="Pokemon Awesome on GitHub"
            className="p-2 text-2xl"
          >
            <span className="sr-only">Pokemon Awesome on GitHub</span>
            <BsGithub />
          </a>
          <label
            htmlFor="darkmode-toggle"
            className="relative inline-flex cursor-pointer items-center text-2xl"
            title="Toggle dark mode"
          >
            <input type="checkbox" id="darkmode-toggle" className="peer sr-only" />
            <div className="h-7 w-11 rounded-full bg-elm-electric transition-colors peer-checked:bg-elm-dark" />
            <div className="absolute left-0 top-0 m-0.5 h-6 w-6 rounded-full bg-white transition-[left] peer-checked:left-4" />
            <HiSun className="absolute top-0 left-0 m-0.5 opacity-100 transition-all peer-checked:left-4 peer-checked:opacity-0" />
            <HiMoon className="absolute top-0 left-0 m-0.5 opacity-0 transition-all peer-checked:left-4 peer-checked:opacity-100" />
          </label>
        </div>
      </div>
    </header>
  );
}
