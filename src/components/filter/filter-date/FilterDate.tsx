import { type Dispatch, useState } from 'react';

import { DateControl } from 'src/components/filter/filter-date/DateControls';
import {
  type FilterDateAction,
  type FilterDateData,
  type FilterDateRangeType,
  type FilterDateState,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import {
  type BaseFilterProps,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';

type BadgeFilterDateProps = BaseFilterProps & {
  dispatch: Dispatch<FilterDateAction>;
  filter: FilterDateState;
};

/**
 * Assumes exclusive date range. Specific formats/ranges should be handled upstream.
 */
export const FilterDate = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: BadgeFilterDateProps) => {
  const [editingValue, setEditingValue] = useState<FilterDateData>(
    filter.dateData,
  );
  const [rangeType, setRangeType] = useState<FilterDateRangeType>(
    filter.dateRangeType,
  );

  const dispatchDateValues = (value: FilterDateData) => {
    dispatch({
      name: 'dateRangeType',
      type: 'change',
      value: rangeType,
    });
    dispatch({
      name: 'dateData.dateBegin',
      type: 'change',
      value: value.dateBegin || null,
    });
    dispatch({
      name: 'dateData.dateEnd',
      type: 'change',
      value: value.dateEnd || null,
    });
    dispatch({
      name: 'dateData.lastCount',
      type: 'change',
      value: value.lastCount,
    });
    dispatch({
      name: 'dateData.lastUnit',
      type: 'change',
      value: value.lastUnit,
    });
  };

  const handleApply = () => {
    dispatchDateValues(editingValue);
    dispatch({
      name: 'isActive',
      type: 'change',
      value: true,
    });
  };

  const handleRemove = () => {
    dispatch({
      name: 'isActive',
      type: 'change',
      value: false,
    });
    dispatch({
      name: 'dateRangeType',
      type: 'change',
      value: rangeType,
    });
    dispatchDateValues(initialFilterDateState.dateData);
    setEditingValue(initialFilterDateState.dateData);
    setRangeType(initialFilterDateState.dateRangeType);
  };

  const { renderWrapper, setFilterText } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!filter.dateData.dateBegin || !!filter.dateData.dateEnd,
    label,
    onApply: handleApply,
    onRemove: handleRemove,
  });

  return renderWrapper(
    <DateControl
      onChange={setEditingValue}
      onChangeFilterText={setFilterText}
      rangeType={rangeType}
      setRangeType={setRangeType}
      value={editingValue}
    />,
  );
};
