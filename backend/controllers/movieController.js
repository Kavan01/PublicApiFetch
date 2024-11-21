const axios = require('axios');

const fetchMovies = async (req, res) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3cae1f78`);
        const data = { Search: [response.data] };
        console.log('OMDb API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
};

module.exports = { fetchMovies };