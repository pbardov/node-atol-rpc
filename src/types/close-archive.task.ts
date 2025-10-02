import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { isOperator, type Operator } from './operator.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {type AdditionalAttribute, isAdditionalAttribute} from './additional-attribute.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';

export type CloseArchiveTask = JsonTask & {
  type: JsonTaskType.closeArchive;
  operator?: Operator;
  electronically?: boolean;
  additionalAttribute?: AdditionalAttribute;
  address?: string;
  paymentAddress?: string;
};

export const isCloseArchiveTask = structureValidator<CloseArchiveTask>({
  type: isEqual(JsonTaskType.closeArchive),
  operator: makeOpt(isOperator),
  electronically: makeOpt(isBoolean),
  additionalAttribute: makeOpt(isAdditionalAttribute),
  address: makeOpt(isString),
  paymentAddress: makeOpt(isString),
});
