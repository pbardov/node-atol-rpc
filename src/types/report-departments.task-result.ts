import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';

export type DepartmentReport = {
  departmentId: number;
  sales: number;
  returns: number;
  revenue: number;
};

export type DepartmentReports = DepartmentReport[];

export const isDepartmentReport = structureValidator<DepartmentReport>({
  departmentId: isNumber,
  sales: isNumber,
  returns: isNumber,
  revenue: isNumber,
});

export const isDepartmentReports = arrayTypeGuard(isDepartmentReport);

export type ReportDepartmentsTaskResult = {
  departmentReports: DepartmentReports;
  reportDate: string;
};

export const isReportDepartmentsTaskResult = structureValidator<ReportDepartmentsTaskResult>({
  departmentReports: isDepartmentReports,
  reportDate: isString,
});
