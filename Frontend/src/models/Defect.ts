import type { DefectImage } from "./DefectImage";

export interface Defect {
    id: string;
    description: string;
    dateFound: string;
    dateClosed: string;
    foundBy: string;
    createdBy: string;
    closedBy?: string;
    dueDate?: string;
    teamId?: string;
    departmentId?: string;
    prodLineId?: string;
    prodUnitId?: string;
    PUGroupId?: string;
    defectLineId?: string;
    defectComponentId?: string;
    priorityId?: string;
    findSourceId?: string;
    images?: DefectImage[];
}