import SVGWordmark from '@svgs/veare-wordmark.svg'
import Link from 'next/link'
import { css } from '@emotion/css'

const style = css`
  fill: var(--on-background__high-emphasis);
  display: block;
  height: 24px;
  &.is-small {
    height: 16px;
  }
  & svg {
    height: 100%;
  }
`

type LogoProps = {
  homepageLink?: boolean,
  small?: boolean
}

const Logo = ({ homepageLink, small, ...props }: LogoProps) => {
  if (homepageLink) {
    return (
      <Link href='/'>
        <a className={`${style} ${small ? 'is-small' : ''} logo`} href='/' aria-label='Go to homepage' {...props}>
          <SVGWordmark />
        </a>
      </Link>
    )
  }
  return (
    <div className={`${style} ${small ? 'is-small' : ''} logo`}>
      <SVGWordmark />
    </div>
  )
}

export { Logo }
