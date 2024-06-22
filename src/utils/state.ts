// import { create } from "zustand";
// import { MovieDetail } from "./apis";

// interface FavoriteState {
//     favorite: Partial<MovieDetail>[]
//     addFavorite:()=> void
//     deleteFavorite:(index: number, movie: MovieDetail) => void
// }

// const useFavoriteStore = create<FavoriteState>((set) => ({
//     favorites:[{}],
//     addFavorite:() ={
//         set((state) => {
//             const temp = [...state.favorite]
//             return {favorites:temp}
//         })
//     }
// }))
