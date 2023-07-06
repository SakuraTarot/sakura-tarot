import axios from 'axios';

const missingCard1 = 53;
const missingCard2 = 55;

export const fetchFilteredCards = async () => {
  try {
    const response = await axios.get(
      'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards'
    );
    const filteredCards = response.data.filter((card) => card.id !== `${missingCard1}` && card.id !== `${missingCard2}`);
    return filteredCards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};