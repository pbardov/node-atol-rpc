---
alwaysApply: true
---

1. Define the new task type in a separate file with the format '[task-type].task.ts', and declare the task structure using type definitions.
2. Define the corresponding task result type in another separate file with the format '[task-type].task-result.ts', and declare the task result structure using type definitions.
3. Import and update the JsonTaskMap with the new task type in an existing or relevant central file, ensuring the mapping follows the pattern: '[JsonTaskType.taskTypeName]: TaskTypeDefinition;'
4. Similarly, update the JsonTaskResultMap with the new task result type in an existing or relevant central file using the pattern: '[JsonTaskType.taskTypeName]: TaskResultTypeDefinition;'
5. Create and include a type guard function for the new task in its defined file, using validators for structure adherence.
6. Create and include a type guard function for the task result in its defined file, similar to the task type.
7. Ensure both task and result types are added to central JSON task guard files by importing and mapping them appropriately with validation functions.
8. For guidance, examine examples in `fiscal.task.ts`, `fiscal.task-result.ts`, `ofd-exchange-status.task.ts`, and `ofd-exchange-status.task-result.ts`.
