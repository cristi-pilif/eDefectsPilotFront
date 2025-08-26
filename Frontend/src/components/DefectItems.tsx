import type { Defect } from "../models/Defect";

export default function DefectItems({defects}: {defects: Defect[]}){
    return (
        <ul>
            {defects && defects.map(defect => (
                <li key={defect.id}>{defect.description}</li>
            ))}
        </ul>
    );
}
//TO DO: upgrade