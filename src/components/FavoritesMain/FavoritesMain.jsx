
export default function FavoritesMain() {
  const favorites = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = `selectedCards${i}`;
    const value = localStorage.getItem(key);
    const card = JSON.parse(value);
    const pass = [card[0].spanishName, card[0].meaning];
    const present = [card[1].spanishName, card[1].meaning];
    const future = [card[2].spanishName, card[2].meaning];
  
    favorites.push(pass, present, future);
  }
  return (
    {favorites}
  );
}
