import { TableStateType } from "@/components/_shared/Table";
import { useMemo, useState } from "react";

const useFilterEmployees = () => {
  const [tableState, setTableState] = useState<TableStateType>({
    rowSelection: {},
    sorting: [],
  });
  const params = useMemo(() => {
    // Create tmp data.
    const paramsTmp = {} as any;

    // Handle sort change
    const sorting = tableState.sorting[0];
    if (sorting) {
      paramsTmp["order"] = sorting.id;
      paramsTmp["ascending"] = !sorting.desc;
    }

    // Handle row selection
    // TODO
    return paramsTmp;
  }, [tableState]);
  return { params, setTableState };
};

export default useFilterEmployees;
