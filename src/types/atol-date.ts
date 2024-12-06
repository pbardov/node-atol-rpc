import {makeIsYearMonthDay, type YearMonthDay} from '../common/types/year-month-day.js';

export type AtolDate = YearMonthDay<'.'>;
export const isAtolDate = makeIsYearMonthDay('.');
