import Link from 'next/link'

export function Tags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export function TagList({ tags }: { tags: { tag: string; count: number }[] }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(({ tag, count }) => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          {tag} <span className="text-neutral-500">({count})</span>
        </Link>
      ))}
    </div>
  )
}
