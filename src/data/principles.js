export const engineeringPrinciples = [
  {
    number: "01",
    title: "Understand Before Building",
    description: "Understand the business requirement, system boundaries, and existing behaviour before deciding on an implementation. Premature code written without domain context creates technical debt."
  },
  {
    number: "02",
    title: "Keep Architecture Maintainable",
    description: "Use clear separation of responsibilities and patterns like Action-Service-Repository that isolate business logic, making applications straightforward to test, audit, and extend."
  },
  {
    number: "03",
    title: "Treat Data Carefully",
    description: "Especially in applications involving payments, account balances, and credit decisions. Leverage ACID database transactions, strict validation, and audit logging to preserve integrity."
  },
  {
    number: "04",
    title: "Design for Failure",
    description: "External services, network rails, and third-party APIs inevitably fail. Applications must handle timeouts, retries, idempotent webhook processing, and controlled rollback behaviour gracefully."
  },
  {
    number: "05",
    title: "Automate Where It Makes Sense",
    description: "Use asynchronous background queues, CI/CD pipelines, and automated database backups to eliminate human error and reduce repetitive operational overhead."
  }
];
