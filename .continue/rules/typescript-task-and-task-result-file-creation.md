---
alwaysApply: true
---

1. Define the new task type in a separate file named with the format '[task-type].task.ts', and declare the task structure using type definitions.
2. Define the corresponding task result type in another separate file named with the format '[task-type].task-result.ts', and declare the task result structure using type definitions.
3. Import and update the JsonTaskMap with the new task type in an existing or relevant central file, ensuring the mapping uses the pattern:
   '[JsonTaskType.taskTypeName]: TaskTypeDefinition;'
4. Similarly, update the JsonTaskResultMap with the new task result type in an existing or relevant central file using the mapping pattern:
   '[JsonTaskType.taskTypeName]: TaskResultTypeDefinition;'
5. Create and include a type guard function for the new task in its defined file, utilizing structure validators if available, to ensure it adheres to its defined structure.
6. Create and include a type guard function for the task result in its defined file, following similarly to the task type.
7. Ensure both task and task result types are added to the central JSON task guard files by importing and mapping them appropriately with structure validator functions, ensuring accurate validation across the system.