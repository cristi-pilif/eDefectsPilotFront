import { useEffect, useState } from "react";
import { getDefects } from "../api/defects";
import type { Defect } from "../models/Defect";

export default function DefectListPage(){
    const [defects, setDefects] = useState<Defect[]>([]);

    useEffect(() => {
        const fetchDefects = async () => {
            const data = await getDefects();
            setDefects(data);
        };
        fetchDefects();
    }, []);

    return (
        <div>
            <h1>Defect List</h1>
            <ul>
                {defects.map(defect => (
                    <li key={defect.id}>{defect.description}</li>
                ))}
            </ul>
        </div>
    );
}
