import { type ReactNode, useMemo } from 'react';
import type { Column } from 'react-data-grid';

import styled from 'styled-components';

import { LegacyButton } from 'src/components/button/LegacyButton';
import { TableData } from 'src/components/nested-data-table/_TableData';
import type { RowWithIndex } from 'src/components/pivot-table/PivotTable';
import { RestState } from 'src/components/rest-state/RestState';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { type flattenRow } from 'src/utils/flattenRow';

const StyledPivotTableContentWrapper = styled.div`
  height: 100%;
`;
const StyledTableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.space8};
`;
const StyledTableActionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: ${theme.space8};
`;

type ColumnType<TRow> = Column<TRow, Record<string, unknown>>;
export type ColumnCell<TRow extends Record<string, unknown>> = NonNullable<
  ColumnType<TRow>['renderCell']
>;
export type CustomColumnCells<TRow extends Record<string, unknown>> = {
  [key in keyof TRow]?: ColumnCell<TRow>;
};

type Props<TRow extends Record<string, unknown>> = {
  currentPage?: number;
  customColumnCells?: CustomColumnCells<TRow>;
  /**
   * @param customFlattenRow
   * @description Custom flattenRow function, if not provided, the default flattenRow (flattenRow - "src/utils/flattenRow.ts") will be used
   */
  customFlattenRow?: typeof flattenRow;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFetching: boolean;
  loadingComponent?: ReactNode;
  restState?: ReactNode;
  tableData: TRow[];
  title?: string;
  handlePagination?: (page: number) => void;
};

export const NestedDataTable = <
  TRow extends Record<string, unknown> | Record<string, unknown>,
>({
  currentPage,
  customColumnCells,
  customFlattenRow,
  handlePagination,
  hasNextPage,
  hasPreviousPage,
  isFetching,
  loadingComponent,
  restState,
  tableData,
  title,
}: Props<TRow>) => {
  const tableDataArr = useMemo(
    () => (Array.isArray(tableData) ? tableData : [tableData]),
    [tableData],
  );

  const showPagination =
    !!handlePagination && !!currentPage && tableData.length;

  const renderTable = () => {
    if (isFetching) {
      return loadingComponent ? (
        <>{loadingComponent}</>
      ) : (
        <RestState label="Loading..." />
      );
    }

    if (tableDataArr.length === 0) {
      return restState ? (
        <>{restState}</>
      ) : (
        <RestState label="No data available." />
      );
    }

    return (
      <TableData
        customColumnCells={customColumnCells as CustomColumnCells<RowWithIndex>}
        customFlattenRow={customFlattenRow}
        tableDataArr={tableDataArr}
      />
    );
  };

  return (
    <StyledPivotTableContentWrapper>
      <StyledTableHeader>
        {!!title && <Text type="header">{title}</Text>}
        {/* Only show pagination if handlePagination and currentPage is provided */}
        {!!showPagination && (
          <StyledTableActionWrapper>
            <LegacyButton
              disabled={currentPage === 1 || !hasPreviousPage}
              intent="outline"
              onClick={() => {
                if (hasPreviousPage) {
                  handlePagination(currentPage - 1);
                }
              }}
            >
              Previous page
            </LegacyButton>
            {currentPage}
            <LegacyButton
              disabled={!hasNextPage}
              intent="outline"
              onClick={() => {
                if (hasNextPage) {
                  handlePagination(currentPage + 1);
                }
              }}
            >
              Next page
            </LegacyButton>
          </StyledTableActionWrapper>
        )}
      </StyledTableHeader>

      {renderTable()}
    </StyledPivotTableContentWrapper>
  );
};
