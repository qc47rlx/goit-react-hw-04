import axios from "axios";

export const getImages = async (setSearchQuery, setPage) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: setSearchQuery,
        client_id: "UClgVwx2vyAsCAE8agVU7-HFMSRAoqFbTddIcwMFZi4",
        page: setPage,
        per_page: 12,
      },
    });

    // return response.data.results;
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};