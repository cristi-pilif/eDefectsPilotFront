import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Defect } from "../models/Defect";
import { getDefect } from "../api/defects";


export default function DefectViewPage(){
    const { id } = useParams<{ id: string }>();
    const [defect, setDefect] = useState<Defect | null>(null);

    useEffect(() => {
        const fetchDefect = async () => {
            if (id) {
                const data = await getDefect(id);
                setDefect(data);
            }
        };
        fetchDefect();
    }, [id]);

    return(
        <>
            <h1>Defect Details</h1>
            {defect ? (
                <div>
                    <p><strong>Description:</strong> {defect.description}</p>
                    <p><strong>Due Date:</strong> {defect.dueDate}</p>
                    <p><strong>Found By:</strong> {defect.foundBy}</p>
                    <p><strong>Created By:</strong> {defect.createdBy}</p>
                    <p><strong>Date Found:</strong> {defect.dateFound}</p>
                    <p><strong>Date Closed:</strong> {defect.dateClosed}</p>
                    {/* Add more fields as necessary */}
                </div>
            ) : (
                <p>Loading defect details...</p>
            )}
        </>
    )

}