import { makeIsYearMonthDay, type YearMonthDay } from '../common/types/year-month-day.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import { TypeGuard } from '../common/types/type-guard.js';

// Define AtolDate for yyyy.mm.dd format
export type AtolDate = YearMonthDay<'.'>;
export const isAtolDate = makeIsYearMonthDay('.');

// Define AtolDateTime for yyyy.mm.dd HH:MM:SS format
export type AtolDateTime = `${AtolDate} ${string}`;

// TypeGuard for AtolDateTime
export const isAtolDateTime: TypeGuard<AtolDateTime> = (v: unknown): v is AtolDateTime =>
  isString(v) && /^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}:\d{2}$/.test(v as string);
