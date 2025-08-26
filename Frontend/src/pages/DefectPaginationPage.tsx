import { useEffect, useState } from "react";
import type { Defect } from "../models/Defect";
import { getDefects } from "../api/defects";
import DefectItems from "../components/DefectItems";
import ReactPaginate from "react-paginate";

export default function DefectPaginationPage() {
   const [defects, setDefects] = useState<Defect[]>([]);
   const [currentPage, setCurrentPage] = useState(0);
   

   useEffect(() => {
       const fetchDefects = async () => {
           const data = await getDefects(currentPage);
           setDefects(data);
       };
       fetchDefects();
   }, [currentPage]);

    return (
        <>
            <DefectItems defects={defects} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={({ selected }) => setCurrentPage(selected)}
                pageRangeDisplayed={5}
                pageCount={20}
                previousLabel="< previous"
            />
        </>
    );
}
