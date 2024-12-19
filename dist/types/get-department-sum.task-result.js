import { isDepartmentSum } from './department-sum.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetDepartmentSumTaskResult = structureValidator({
    departmentSum: isDepartmentSum,
});
