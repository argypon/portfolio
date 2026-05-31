import { useParams, Link } from 'react-router-dom'

export default function WorkDetail() {
  const { slug } = useParams()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
         style={{ background: 'hsl(var(--bg))', color: 'hsl(var(--text))' }}>
      <h1 className="font-display italic text-5xl md:text-7xl mb-8 text-center">
        {slug?.replace(/-/g, ' ')}
      </h1>
      <p className="text-sm mb-12" style={{ color: 'hsl(var(--muted))' }}>
        Project detail page — add your case study content here.
      </p>
      <Link to="/"
            className="text-xs uppercase tracking-[0.2em] transition-colors"
            style={{ color: 'hsl(var(--muted))' }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = 'hsl(var(--text))' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = 'hsl(var(--muted))' }}>
        ← Back home
      </Link>
    </div>
  )
}