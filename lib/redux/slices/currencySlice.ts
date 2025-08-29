import { CURRENCY_CODE } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CurrencyState {
  selected: CURRENCY_CODE;
}

const initialState: CurrencyState = {
  selected: CURRENCY_CODE.BOB, // default
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CURRENCY_CODE>) => {
      state.selected = action.payload;
    },
  },
});

//Selectors
export const selectCurrency = (state: RootState) => state.currency.selected;

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
