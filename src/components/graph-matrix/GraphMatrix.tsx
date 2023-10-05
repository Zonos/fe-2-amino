import { type ReactNode, useEffect, useState } from 'react';

import {
  type ExecutionContextType,
  ToolbarButton,
  Tooltip,
} from '@graphiql/react';
import type { CodeMirrorEditor } from '@graphiql/react/types/editor/types';
import { GraphiQL } from 'graphiql';
import type { GraphQLSchema } from 'graphql';
import styled from 'styled-components';

import { GraphiqlContextWrapper } from 'src/components/graph-matrix/_GraphiqlContextWrapper';
import { Loading } from 'src/components/graph-matrix/_LoadingIcon';
import { NestedDataTable } from 'src/components/nested-data-table/NestedDataTable';
import { SplitPanel } from 'src/components/split-panel/SplitPanel';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';
import { theme } from 'src/styles/constants/theme';
import type {
  ExecutionResultType,
  GraphiqlExecutionResult,
  HandleFetchFetcher,
} from 'src/utils/_graphiqlFetcher';
import { useGraphiqlExplorer } from 'src/utils/hooks/_useGraphiqlExplorer';
import { useGraphiqlFetcher } from 'src/utils/hooks/_useGraphiqlFetcher';
import { useGraphiqlStorage } from 'src/utils/hooks/_useGraphiqlStorage';

// These rules are !important because graphiql inlines their styles
const StyledWrapper = styled.div`
  height: 100%;
  .graphiql-tab > .graphiql-tab-button {
    outline: none;
  }
  .docExplorerWrap {
    /* Built-in plugin height is set to 100% which prevents the plugin bar scrolling */
    height: auto !important;
    /* Don't cap explorer width */
    width: auto !important;
  }
  .graphiql-explorer-graphql-arguments {
    svg {
      display: inline-block;
    }
  }

  .graphiql-explorer-root > div {
    overflow: auto !important;
  }
`;

const StyleTableWrap = styled.div`
  height: 100%;
`;

const StyledPivotTableWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  padding: 0 ${theme.space12};
  display: flex;
  flex-direction: column;
`;

type GraphMatrixProps = {
  // Toolbar item. You can add your own toolbar item and use the built in <GraphMatrix.ToolbarButton>
  customToolbar?: ReactNode;
  /**
   * @param fetcher
   * @description Custom fetcher, if not provided, the default fetcher (handleFetch - "src/utils/handleFetch.ts") will be used
   */
  fetcher?: HandleFetchFetcher;
  loadingComponent?: ReactNode;
  query: string;
  schema: GraphQLSchema | null;
  /**
   * @param schemaName name of the schema, used to get the option for that schema from the cache
   * @example schemaName = 'Internal GraphQl'
   */
  schemaName: string;
  url: string;
  variables: string;
  onEditQuery: (query: string) => void;
  onEditVariables: (variables: string) => void;
  onResultData?: (
    data: GraphiqlExecutionResult<ExecutionResultType> | null,
  ) => void;
};

export const GraphMatrix = ({
  customToolbar,
  fetcher,
  loadingComponent,
  onEditQuery,
  onEditVariables,
  onResultData,
  query = '',
  schema,
  schemaName,
  url,
  variables = '',
}: GraphMatrixProps) => {
  /** @description Graphiql doesn't expose props, so we use the hook `use{Something}Context` */
  const [executionContext, setExecutionContext] =
    useState<ExecutionContextType | null>(null);

  /** @description Response codemirror editor (have the ability to do some actions with response codemirror) */
  const [, setResponseEditorContext] = useState<CodeMirrorEditor | null>(null);

  const [isFetching, setIsFetching] = useState(false);
  const [cachingKey] = useState('first-time');
  const [showTable, setShowTable] = useState(false);
  const [splitPanelSizes, setSplitPanelSizes] = useState([1, 0]);
  const [isClientRendering, setIsClientRendering] = useState(false);

  const [operationName, setOperationName] = useState('');
  const { graphiqlFetcher, isLoading, resultData } = useGraphiqlFetcher({
    cachingKey,
    customFetcher: fetcher || null,
    operationName,
    query,
    url,
  });

  const storage = useGraphiqlStorage({
    defaultSchema: schemaName,
  });

  useEffect(() => {
    setIsClientRendering(true);
  }, []);

  useEffect(() => {
    /** Detect if is fetching data in graphiql explorer when hitting "Play" button  */
    setIsFetching(!!executionContext?.isFetching || isLoading);
  }, [executionContext?.isFetching, setIsFetching, isLoading]);

  useEffect(() => {
    if (resultData && onResultData) {
      onResultData(resultData);
    }
  }, [onResultData, resultData]);

  const graphMatrixPlugin = useGraphiqlExplorer({});

  // only show data if it's loading the schema
  if (!schema) {
    return <>{loadingComponent || <Loading />}</>;
  }

  const renderTableData = () => {
    // go deeper into the result "data" if possible
    const result = resultData !== null ? resultData.data : resultData;
    const actionResultList = result ? Object.entries(result) : null;

    if (actionResultList) {
      return (
        <StyledPivotTableWrapper>
          {actionResultList.map(([actionName, actionResult]) => {
            if (Array.isArray(actionResult) || actionResult) {
              return (
                <NestedDataTable
                  key={actionName}
                  isFetching={isFetching}
                  tableData={actionResult as Record<string, unknown>[]}
                  title={actionName}
                />
              );
            }
            return null;
          })}
        </StyledPivotTableWrapper>
      );
    }
    return null;
  };

  return (
    <StyledWrapper>
      <SplitPanel
        collapseAll={!showTable}
        onSetSizes={setSplitPanelSizes}
        sizes={splitPanelSizes}
      >
        <StyleTableWrap>
          {isClientRendering && (
            <GraphiQL
              fetcher={graphiqlFetcher}
              onEditOperationName={setOperationName}
              onEditQuery={onEditQuery}
              onEditVariables={onEditVariables}
              plugins={[graphMatrixPlugin]}
              query={query}
              schema={schema}
              storage={storage}
              toolbar={{
                additionalContent: (
                  <Tooltip.Provider>
                    <ToolbarButton
                      label={showTable ? 'Hide table' : 'Show table'}
                      onClick={() => setShowTable(!showTable)}
                    >
                      {showTable ? (
                        <EyeOffIcon color="red600" />
                      ) : (
                        <EyeIcon color="gray400" />
                      )}
                    </ToolbarButton>
                    {customToolbar}
                  </Tooltip.Provider>
                ),
              }}
              variables={variables}
            >
              <GraphiqlContextWrapper
                setExecutionContext={setExecutionContext}
                setResponseEditorContext={setResponseEditorContext}
              >
                <GraphiQL.Footer />
              </GraphiqlContextWrapper>
            </GraphiQL>
          )}
        </StyleTableWrap>
        {renderTableData()}
      </SplitPanel>
    </StyledWrapper>
  );
};

GraphMatrix.ToolbarButton = ToolbarButton;
