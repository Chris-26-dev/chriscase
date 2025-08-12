import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Facebook, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-white h-30 sm:h-20 relative'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200' />

        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex space-x-6'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className='flex space-x-6 sm:space-x-4 py-4'>
            <Link href='https://github.com/Chris-26-dev' target='_blank'>
              <Github className='h-5 w-5 text-muted-foreground hover:text-gray-800 transition' />
            </Link>
             <Link href='https://facebook.com/christian.panerio.2024' target='_blank'>
              <Facebook className='h-5 w-5 text-muted-foreground hover:text-blue-600 transition' />
            </Link>
            <Link href='https://www.linkedin.com/in/christian-panerio-b49567223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
              <Linkedin className='h-5 w-5 text-muted-foreground hover:text-blue-700 transition' />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer