"use client";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { FC, useEffect, useMemo, useState } from "react";

const StudentPage: FC = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://edupy-server.vercel.app/users')
          .then((res) => res.json())
          .then((data) => {
            setStudents(data)
          })
      }, [])
    const [filtering, setFiltering] = useState("");
    const data = useMemo(() => students, [students]);
    console.log(students);
    
    const columns = [
        {
            header: "name",
            accessorKey: "name",
        },
        {
            header: "email",
            accessorKey: "email",
        },
        {
            header: "phone",
            accessorKey: "phone",
        },
        {
            header: "school",
            accessorKey: "school",
        },
        {
            header: "city",
            accessorKey: "city",
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <>
            <div>
                <div className="flex justify-between items-center py-2">
                    <h3 className="font-Quicksand dark:text-gray-200 text-[#0c1427] text-2xl font-bold">
                        All Students
                    </h3>
                    <div className="block relative">
                        <input
                            placeholder="Search"
                            value={filtering}
                            onChange={(e) => setFiltering(e.target.value)}
                            className="p-2 w-full border dark:bg-[#001d30] bg-gray-200 dark:text-gray-200 text-[#0c1427] border-[#0c1427]/20 rounded-md focus:border-[#0c1427]/20 outline-none transition-colors duration-300"
                        />
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase dark:bg-[#3fa4ff] dark:text-gray-200 bg-gray-200 ">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            scope="col"
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="px-6 py-3"
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div>
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext()
                                                    )}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="dark:bg-[#001d30] dark:text-gray-200 bg-white dark:border-slate-800 border-b">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-6 py-4">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col items-center py-5">
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-[#0c1427] rounded-s hover:bg-gray-500"
                            onClick={() => table.setPageIndex(0)}
                        >
                            First
                        </button>
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-[#0c1427] border-0 hover:bg-gray-500"
                            disabled={!table.getCanPreviousPage()}
                            onClick={() => table.previousPage()}
                        >
                            Prev
                        </button>
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-[#0c1427] border-0 border-rose-700 hover:bg-gray-500"
                            disabled={!table.getCanNextPage()}
                            onClick={() => table.nextPage()}
                        >
                            Next
                        </button>
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-[#0c1427] border-0 border-rose-700 rounded-e hover:bg-gray-500"
                            onClick={() =>
                                table.setPageIndex(table.getPageCount() - 1)
                            }
                        >
                            Last
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentPage;
