import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const loginUser = async (
    email: string,
    password: string
) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data.token;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Erro no login');
        } else {
            throw new Error('Erro desconhecido');
        }
    }
};

export const registerUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { email, password });
        return response.data.token;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message || 'Erro ao cadastrar');
        } else {
            throw new Error('Erro desconhecido');
        }
    }
};
