import {type DepartmentSum, isDepartmentSum} from './department-sum.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetDepartmentSumTaskResult = {
	departmentSum: DepartmentSum;
};

export const isGetDepartmentSumTaskResult = structureValidator<GetDepartmentSumTaskResult>({
	departmentSum: isDepartmentSum,
});
