export function fahrenheitParaCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function celsiusParaFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}