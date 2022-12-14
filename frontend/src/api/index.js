import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:1338',
 });

export const getExams = async (cpf) => {
   const exams = await api.get(`/pull?cpf=${cpf}`);
   return exams;
}