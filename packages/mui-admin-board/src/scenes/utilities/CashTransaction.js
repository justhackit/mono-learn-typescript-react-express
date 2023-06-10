import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitCashTransaction } from '../../redux-actions';

const CashTransaction = () => {
  const [cashTransaction, setCashTransaction] = useState({
    transDate: '',
    description: '',
    amount: 0.0,
    trans_type: 'debit',
    category: '',
    notes: '',
  });
  const [category, setCategory] = useState('Groceries');
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCashTransactionChange = (e) => {
    setCashTransaction({
      ...cashTransaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleCashTransactionSubmit = () => {
    console.log(cashTransaction);
    // dispatch(submitCashTransaction(cashTransaction));
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="row"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <Box display="flex" flexDirection="column">
        <TextField
          id="outlined-basic"
          label="Transaction Date"
          variant="outlined"
          name="transDate"
          value={cashTransaction.transDate}
          onChange={handleCashTransactionChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          style={{ width: '120%' }}
          value={cashTransaction.description}
          onChange={handleCashTransactionChange}
          multiline
        />

        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          name="amount"
          value={cashTransaction.amount}
          onChange={handleCashTransactionChange}
        />
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value={'Groceries'}>Groceries</MenuItem>
            <MenuItem value={'Shopping'}>Shopping</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Notes"
          variant="outlined"
          name="notes"
          style={{ width: '150%' }}
          value={cashTransaction.notes}
          onChange={handleCashTransactionChange}
          multiline
        />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button variant="contained" onClick={handleCashTransactionSubmit}>
            Submit
          </Button>
          <Button variant="contained">Clear</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CashTransaction;
