import { css } from '@emotion/css'
import { Date } from 'components/Date'
import { Headline } from 'components/Headline'
import Arrow from '@svgs/arrow-right.svg'
import Link from 'next/link'
import { Paragraph } from 'components/Paragraph'
import { Separator } from 'components/Separator'
import { Category } from 'components/Blog/Category'

type PostPreviewProps = {
  post: PostPreviewType
}

const style = css`
  color: var(--on-background__high-emphasis);
  display: block;
  h3 {
    margin-bottom: 8px;
  }
  .svg-arrow {
    margin-left: 8px;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
  .post-details {
    margin-bottom: 16px;
    color: var(--on-background__low-emphasis);
    font-size: var(--font-size--caption);
    font-weight: var(--font-weight--bold);
  }
`

const PostPreview = ( {post}: PostPreviewProps ) => {
  return (

        <a target="_blank" className={style} href={`${post.slug}`}>
          <Headline level="3">{post.title}<Arrow className="svg-arrow" /></Headline>
          <div className="post-details">
            <Date date={post.published} />
            <Separator type="inline"/>
            <Category type={post.category}/>
          </div>
          <Paragraph>{post.excerpt}</Paragraph>
        </a>

  )
}

export { PostPreview }
