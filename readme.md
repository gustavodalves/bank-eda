# Event Driven Architecture

## Synchronous Banking System

This project is designed to simulate a synchronous banking system. It demonstrates how various components work together to handle banking operations in a asynchronized manner. Operations like crediting and debiting accounts, as well as calculating balances, are processed sequentially, mirroring the real-world behavior of a banking system. This project is an example of an Event Driven Architecture that utilizes the Mediator and Observer patterns. These are the core concepts:

## Mediator Pattern

- **Mediator**: In the Mediator pattern, a central component (the Mediator) manages the communication and interaction between other components, preventing them from communicating directly. This reduces dependencies and promotes a more decoupled system.

## Observer Pattern

- **Observer**: The Observer pattern allows one object (the subject) to notify a list of its dependents (observers) about state changes, typically using an event or callback mechanism. Observers can subscribe to and receive updates from the subject.

## Event Handling

- **Events**: Events are used to represent occurrences or changes within a system. In this project, the 'CreditApplicationEvent' is an example of an event used to track credit-related activities.

- **Handlers**: Handlers, like the 'CreditHandler,' are responsible for listening to specific events, processing them, and potentially triggering actions within the system.

This code serves as a demonstration of the Event Domain Architecture with the Mediator and Observer patterns in TypeScript. You can adapt and extend this code to fit your specific project requirements.

## Account Aggregated Class

The project includes an `Account` class, which acts as an aggregate root within the system. It encapsulates various properties and methods related to bank accounts, including:

- Creating a new account: Using the `create` method, you can create a new account with properties such as a tax ID, agency, and an empty list of transactions.

- Recovering an existing account: The `recover` method allows you to reconstruct an account using specific details, such as its identifier, tax ID, account number, agency, and transaction history.

- Crediting and debiting: The `credit` and `debit` methods enable you to credit or debit the account with a specified amount, respectively. These actions generate credit or debit events.

- Balance calculation: The `getBalance` method calculates the account's balance based on its transaction history.

The `Account` class plays a central role in demonstrating the Event Domain Architecture with Mediator and Observer by processing events and maintaining the state of bank accounts.

## Transaction Entity

The project includes a `Transaction` class, which represents individual financial transactions within the system. In this project, `Transaction` is treated as an entity rather than an object of value. This is because there is the potential for future requirements to retrieve specific transactions based on their unique identifiers (IDs).

- **Transaction Type**: The `Transaction` class defines two transaction types, 'debit' and 'credit,' using the `TransactionType` enum. These types indicate whether the transaction represents a debit or credit operation.

- **Value and Type**: Each transaction has a specified value and type, which is set during its creation. The type can be either 'debit' or 'credit,' and the value represents the amount involved in the transaction.

- **Calculation Strategy**: The class employs a strategy pattern for calculating the effect of a transaction on an account's balance. The `CalculateStrategy` interface defines a `calculate` method, and there are two concrete strategy implementations:
  - `DebitCalculateStrategy`: Used for 'debit' transactions, it subtracts the transaction's value from the total balance.
  - `CreditCalculateStrategy`: Used for 'credit' transactions, it adds the transaction's value to the total balance.

- **Factory Pattern**: The `CalculateStrategyFactory` class acts as a factory to create the appropriate calculation strategy based on the transaction type. It helps maintain a clean and extensible codebase.

By treating `Transaction` as an entity, the project is prepared for future enhancements, such as the retrieval of specific transactions based on their IDs.

## Tests

The project is rigorously tested to ensure its functionality and reliability. The tests cover various aspects, including event handling, event propagation, and the behavior of different components within the architecture. All tests have been successfully passed, confirming the project's robustness.

## Contributions

Contributions to this project are welcome. Feel free to fork, create branches, and submit pull requests to enhance the architecture further.
