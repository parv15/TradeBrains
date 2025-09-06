"use client";
import { useFavorites } from "../utils/useFavorite";
import "../global.css";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";

export default function FavoritesList() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        My Favorites
      </h2>

      {favorites?.length > 0 ? (
        <div>
          {favorites.map((s) => (
            <div key={s} className="my-4 card-dark p-4 rounded-2xl shadow-md">
              <Link
                href={`/stock/${encodeURIComponent(s)}`}
                className="block py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition"
              >
                {s}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          You haven’t added any favorites yet.
        </p>
      )}
    </div>
  );
}
