const fetchNews = async (search: string = "",category:string = "") => {
    try {
        const response = await fetch(`https://news-api-lemon-zeta.vercel.app/api/news?category=${category}&search=${search}`);
        
        // Check if the response is not okay (status code not in the 2xx range)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse and return the JSON data if the response is successful
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error fetching news data", error);
        return [];  // Return an empty array in case of error
    }
};

export default fetchNews;
