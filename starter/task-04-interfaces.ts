/**
 * Завдання 4 / Task 4: Опис об'єкта через interface або type
 *                      / Describing an object with interface or type
 *
 * UA:
 * 1. Опишіть структуру тестового кейсу TestCase. Кейс має:
 *    - числовий ідентифікатор
 *    - назву
 *    - статус, що може приймати лише три конкретні значення: passed, failed, skipped
 *    - необов'язкового власника (owner)
 *    - список тегів
 * 2. Створіть дві змінні типу TestCase: одну без поля an owner, іншу — з ним.
 *
 * EN:
 * 1. Describe the structure of a test case TestCase. A case has:
 *    - a numeric identifier
 *    - a title
 *    - a status that can only be one of three specific values: passed, failed, skipped
 *    - an optional owner
 *    - a list of tags
 * 2. Create two variables of type TestCase: one without the owner field, one with it.
 *
 * Критерії / Criteria:
 * - структура містить усі 5 полів із правильними типами
 *   / the structure contains all 5 fields with correct types
 * - є змінна без поля owner і змінна з ним
 *   / there is a variable without owner and a variable with it
 */

// DONE: опиши й експортуй TestCase / define and export TestCase
export interface TestCase {
  id: number;
  name: string;
  status: "passed" | "failed" | "skipped";
  owner?: string;
  tags: string[];
}

// DONE: firstCase (без owner / without owner) — export const firstCase: TestCase = ...
export const firstCase: TestCase = {
  id: 1,
  name: "First test case",
  status: "passed",
  tags: ["tag1"]
};

// DONE: secondCase (з owner / with owner) — export const secondCase: TestCase = ...
export const secondCase: TestCase = {
  id: 2,
  name: "Second test case",
  status: "failed",
  owner: "John Doe",
  tags: ["tag2", "tag3"]
};

export {};
