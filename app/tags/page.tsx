import { getAllTags } from 'app/blog/utils'
import { TagList } from 'app/components/tags'

export const metadata = {
  title: 'Tags',
  description: 'Browse all tags',
}

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All Tags
      </h1>
      <TagList tags={tags} />
    </section>
  )
}
