import Link from 'next/Link';
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDiscordLine, RiLinkedinLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/channel/UCIs8S_359FvCoTgspchiHiA'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.instagram.com/kemp.coll/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/Kromppp/'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://discord.com/invite/s7pQq9wxGa'} className='hover:text-accent transition-all duration-300'>
        <RiDiscordLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/nolibert-eligan-9671b1254/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
    </div>
  )
};

export default Socials;
