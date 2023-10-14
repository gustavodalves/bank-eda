import Specification, { Spec } from "./specification";

export default class OrSpecification<T> implements Spec<T> {
  constructor(
    private readonly left: Specification<T>,
    private readonly right: Specification<T>
  ) {}

  isSatisfiedBy(item: T): boolean {
    return this.left.isSatisfiedBy(item) || this.right.isSatisfiedBy(item);
  }
}
