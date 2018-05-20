import TextFilter from './src/components/text';
import SelectFilter from './src/components/select';
import NumberFilter from './src/components/number';
import DateFilter from './src/components/date';
import createContext from './src/context';
import * as Comparison from './src/comparison';

export default (options = {}) => ({
  createContext,
  options
});

export const Comparator = Comparison;

export const textFilter = (props = {}) => ({
  Filter: TextFilter,
  props
});

export const selectFilter = (props = {}) => ({
  Filter: SelectFilter,
  props
});

export const numberFilter = (props = {}) => ({
  Filter: NumberFilter,
  props
});

export const dateFilter = (props = {}) => ({
  Filter: DateFilter,
  props
});