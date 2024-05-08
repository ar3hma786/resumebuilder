import { apiClient } from "./APIClient";


export const createProfile = (profileDTO) => {
    return apiClient.post("/api/createprofile", profileDTO);
}


// APIService.js
// export const getProfile = async (profileId) => {
//     try {
//         const response = await apiClient.get(`/api/getProfile/${profileId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error getting profile:', error.message);
//         throw new Error('Error getting profile');
//     }
// };

export const getProfile = (profileId) => {
    return apiClient.get(`/api/getProfile/${profileId}`);
}



export const addExperience = async (experienceDTO) => {
    try {
        const response = await apiClient.post("/api/addexperience", experienceDTO);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteExperience = async (experienceId) => {
    try {
        await apiClient.delete(`/api/deleteExperience/${experienceId}`);
    } catch (error) {
        console.error('Error deleting experience:', error.message);
        throw new Error('Error deleting experience');
    }
};

export const getExperience = async (experienceId) => {
    try {
        const response = await apiClient.get(`/api/getExperience`);
        return response.data;
    } catch (error) {
        console.error('Error getting experience:', error.message);
        throw new Error('Error getting experience');
    }
}