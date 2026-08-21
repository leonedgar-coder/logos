import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Λόγος Think Tank',
    short_name: 'Λόγος',
    description: 'Un espacio de meditación, análisis y pensamiento profundo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      }
    ],
  }
}
