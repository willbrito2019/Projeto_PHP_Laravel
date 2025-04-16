const axios = require('axios');

exports.getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        return response.data;
    } catch (error) {
        return null;
    }
};
