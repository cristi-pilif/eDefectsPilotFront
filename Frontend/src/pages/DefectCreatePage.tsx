import { useState } from "react";
import { createDefect } from "../api/defects";


export default function DefectCreatePage(){

    const [formData, setFormData] = useState({
        description: "",
        dueDate: "",
        foundBy: "",
        createdBy: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await createDefect({
                ...formData,
                dateFound: new Date().toISOString(),
                dateClosed: "2025-08-26T10:36:08.861Z",
                images: []
            });
            console.log("Defect created:", response);
        } catch (error) {
            console.error("Error creating defect:", error);
        }
        

    };

    return(
        <>
            <h1>Create Defect</h1>
            <form onSubmit={handleSubmit}>
                <label>Description: </label>
                <input 
                    type="text"
                    name="description"
                    value = {formData.description} 
                    onChange={handleChange}
                />

                <label>Due date:</label>
                <input 
                    type="text" 
                    name="dueDate" 
                    value={formData.dueDate} 
                    onChange={handleChange}
                />

                <label>Found by:</label>
                <input 
                    type="text" 
                    name="foundBy" 
                    value={formData.foundBy} 
                    onChange={handleChange}
                />
                <label>Created by:</label>
                <input 
                    type="text" 
                    name="createdBy" 
                    value={formData.createdBy} 
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </>
    );
}