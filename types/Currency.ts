export enum CURRENCY_SYMBOL {
  USD = '$',
  BOB = 'Bs',
}

export enum CURRENCY_CODE {
  USD = 'usd',
  BOB = 'bob',
}

// Map code to symbol
const currencySymbolMap: Record<CURRENCY_CODE, CURRENCY_SYMBOL> = {
  [CURRENCY_CODE.USD]: CURRENCY_SYMBOL.USD,
  [CURRENCY_CODE.BOB]: CURRENCY_SYMBOL.BOB,
};

export function getCurrencySymbol(code: CURRENCY_CODE): CURRENCY_SYMBOL {
  return currencySymbolMap[code];
}

export const DEFAULT_CURRENCY: CURRENCY_CODE = CURRENCY_CODE.BOB;
