---
description: Provide a standardized process to add new JSON tasks and their
  results, ensuring consistent updates across type maps and guards.
---

1. **Define the New Task Type:** Create a new file in the `src/types` directory with the name following the format `[task-type].task.ts` (e.g., `get-licenses.task.ts`). Define the task structure using TypeScript type definitions and extend from `JsonTask` or a relevant base type. Use type helpers like `structureValidator`, `isEqual`, and `arrayTypeGuard` for validation.

2. **Define the Corresponding Task Result Type:** In another file with the name format `[task-type].task-result.ts` (e.g., `get-licenses.task-result.ts`), define the task result structure. Use type helpers for validating the structure, ensuring all necessary properties are included.

3. **Update the JsonTaskMap:** Import your new task type into your central map file (e.g., `json-task-map.ts`). Add an entry linking the `JsonTaskType.[YourTaskType]` to your new task type:
   ```typescript
   [JsonTaskType.getLicenses]: GetLicensesTask;
   ```

4. **Update the JsonTaskResultMap:** Similarly, import the new task result type and add an entry in the central result map (e.g., `json-task-result-map.ts`):
   ```typescript
   [JsonTaskType.getLicenses]: GetLicensesTaskResult;
   ```

5. **Implement Type Guard for the Task:** In your `.task.ts` file, implement a type guard function using `structureValidator` to ensure your task adheres to its intended structure. Update `json-task.guard.ts` by importing and adding your type guard:
   ```typescript
   [JsonTaskType.getLicenses]: isGetLicensesTask;
   ```

6. **Implement Type Guard for the Task Result:** Similarly, in your `.task-result.ts` file, create a type guard for the task result. Then update `json-task-result.guard.ts` by importing and registering the new type guard:
   ```typescript
   [JsonTaskType.getLicenses]: isGetLicensesTaskResult;
   ```

This guide ensures that new tasks and their results are properly integrated into the system with type safety and consistency across type checks.
