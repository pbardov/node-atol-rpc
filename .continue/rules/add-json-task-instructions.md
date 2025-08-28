---
description: Provide a standardized process to add new JSON tasks and their
  results, ensuring consistent updates across type maps and guards.
---

1. Define the new task type in a new file (e.g., get-licenses.task.ts). Create the task structure there.

2. Define the corresponding task result type in another file (e.g., get-licenses.task-result.ts). Define the task result structure there.

3. Update the JsonTaskMap by importing the new task type and adding an entry for it:
   ```typescript
   [JsonTaskType.getLicenses]: GetLicensesTask;
   ```

4. Update the JsonTaskResultMap by importing the new task result type and adding an entry for it:
   ```typescript
   [JsonTaskType.getLicenses]: GetLicensesTaskResult;
   ```

5. Implement and add a type guard function for the new task in the corresponding `.task.ts` file, and update json-task.guard.ts by importing and adding:
   ```typescript
   [JsonTaskType.getLicenses]: isGetLicensesTask;
   ```

6. Implement and add a type guard function for the task result in the corresponding `.task-result.ts` file, and update json-task-result.guard.ts by importing and adding:
   ```typescript
   [JsonTaskType.getLicenses]: isGetLicensesTaskResult;
   ```