import { fahrenheitParaCelsius, celsiusParaFahrenheit } from '../src/conversor';

describe('fahrenheitParaCelsius', () => {
  test('32 °F corresponde a 0 °C (ponto de congelamento)', () => {
    expect(fahrenheitParaCelsius(32)).toBeCloseTo(0);
  });

  test('212 °F corresponde a 100 °C (ponto de ebulição)', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
  });

  test('98,6 °F corresponde a 37 °C (temperatura corporal)', () => {
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
  });
});

describe('celsiusParaFahrenheit', () => {
  test('0 °C corresponde a 32 °F', () => {
    expect(celsiusParaFahrenheit(0)).toBeCloseTo(32);
  });

  test('100 °C corresponde a 212 °F', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
  });

  test('-40 °C corresponde a -40 °F (único valor igual nas duas escalas)', () => {
    expect(celsiusParaFahrenheit(-40)).toBeCloseTo(-40);
  });
});