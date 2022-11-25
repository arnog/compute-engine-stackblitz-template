import { ComputeEngine } from '@cortex-js/compute-engine';

const ce = new ComputeEngine();

const expr = ce.parse('x^{\\frac{3}{5}}');
console.log(expr.toString());
