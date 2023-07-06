import mockAxios from 'axios';
import { fetchFilteredCards } from "./ApiGetArray";

describe("fetchFilteredCards", () => {
    it("calls axios with success", async () => {

        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: [{
                id: 1
            }]
        }));
    
        const result = await fetchFilteredCards();
    
        expect(result).toEqual([{id: 1}]);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards");

    });        
});