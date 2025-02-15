class A {
  funInsideA() {}
}

//! Task: Implement this without extends keyword
class B extends A {
  funInsideB() {}
}

const p = new B();

console(p.funInsideB());
console.log(p.funInsideA());
