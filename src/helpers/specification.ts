import OrSpecification from "./or-specification";


export interface Spec<T> {
  isSatisfiedBy(item: T): boolean
}

interface SpecOperations<T> {
  or(spec: Spec<T>): Spec<T>
}

export default abstract class Specification<T> implements Spec<T>, SpecOperations<T> {
  abstract isSatisfiedBy(item: T): boolean;

  or(spec: Specification<T>): Spec<T> {
    return new OrSpecification<T>(this, spec);
  }
}
