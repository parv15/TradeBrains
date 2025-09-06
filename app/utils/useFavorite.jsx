'use client'
import { useState, useEffect } from 'react'

export function useFavorites(key = 'favorites') {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem(key)
    console.log('Stored favorites:', stored)
    if (stored) setFavorites(JSON.parse(stored))
  }, [key])

  const toggleFavorite = (symbol) => {
    setFavorites((prev) => {
      let updated
      if (prev.includes(symbol)) {
        updated = prev.filter((item) => item !== symbol) 
      } else {
        updated = [...prev,(symbol)] 
      }
      localStorage.setItem(key, JSON.stringify(updated))
      return updated
    })
  }

  const isFavorite = (symbol) => favorites.includes(symbol)

  return { favorites, toggleFavorite, isFavorite }
}