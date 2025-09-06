'use client'
import { useFavorites } from '../utils/useFavorite'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export default function FavoriteButton({ symbol }) {
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <button onClick={() => toggleFavorite(symbol)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {isFavorite(symbol) ? (
        <MdFavorite style={{ color: '#ff7b7b', fontSize: 20 }} />
      ) : (
        <MdFavoriteBorder style={{ color: 'var(--muted)', fontSize: 20 }} />
      )}
    </button>
  )
}