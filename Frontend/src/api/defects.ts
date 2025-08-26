import type { Defect } from "../models/Defect";
import {api} from "./client";

export async function getDefect(id: string): Promise<Defect> {
    const response = await api.get(`/defect/${id}`);
    return response.data;
}

export async function createDefect(defect: Omit<Defect, 'id'>): Promise<Defect> {
    const response = await api.post('/defect', defect);
    console.log(response);
    return response.data;
}

export async function updateDefect(defect: Defect): Promise<Defect> {
    const response = await api.put(`/defect`, defect); //posibil sa trb /id
    return response.data;
}

export async function deleteDefect(id: string): Promise<void> {
    await api.delete(`/defect`); //posibil sa fie /{id}
}

export async function getDefects(pageNo?: number): Promise<Defect[]> {
    const response = await api.get('/defect', { params: { pageNo } });
    return response.data;
}