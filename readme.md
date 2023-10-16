# Event Domain Architecture

## Synchronous Banking System

This project is designed to simulate a synchronous banking system. It demonstrates how various components work together to handle banking operations in a synchronized manner. Operations like crediting and debiting accounts, as well as calculating balances, are processed sequentially, mirroring the real-world behavior of a banking system. This project is an example of an Event Domain Architecture that utilizes the Mediator and Observer patterns. These are the core concepts:

## Mediator Pattern

- **Mediator**: In the Mediator pattern, a central component (the Mediator) manages the communication and interaction between other components, preventing them from communicating directly. This reduces dependencies and promotes a more decoupled system.

## Observer Pattern

- **Observer**: The Observer pattern allows one object (the subject) to notify a list of its dependents (observers) about state changes, typically using an event or callback mechanism. Observers can subscribe to and receive updates from the subject.

## Event Handling

- **Events**: Events are used to represent occurrences or changes within a system. In this project, the 'CreditApplicationEvent' is an example of an event used to track credit-related activities.

- **Handlers**: Handlers, like the 'CreditHandler,' are responsible for listening to specific events, processing them, and potentially triggering actions within the system.

This code serves as a demonstration of the Event Domain Architecture with the Mediator and Observer patterns in TypeScript. You can adapt and extend this code to fit your specific project requirements.

## Tests

The project is rigorously tested to ensure its functionality and reliability. The tests cover various aspects, including event handling, event propagation, and the behavior of different components within the architecture. All tests have been successfully passed, confirming the project's robustness.

## Contributions

Contributions to this project are welcome. Feel free to fork, create branches, and submit pull requests to enhance the architecture further.
