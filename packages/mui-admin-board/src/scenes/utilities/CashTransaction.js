import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';
import { submitCashTransaction } from '../../redux-actions';

const CashTransaction = (props) => {
  const buildInitialState = () => {
    return {
      transDate: new Date().toISOString().slice(0, 10),
      description: '',
      amount: 0.0,
      transType: 'debit',
      accountName: 'Cash',
      category: 'Groceries',
      notes: '',
    };
  };
  const [cashTransaction, setCashTransaction] = useState(buildInitialState());
  const handleCategoryChange = (event) => {
    setCashTransaction({
      ...cashTransaction,
      category: event.target.value,
    });
  };
  const handleAccountChange = (event) => {
    setCashTransaction({
      ...cashTransaction,
      accountName: event.target.value,
    });
  };

  const handleCashTransactionChange = (e) => {
    setCashTransaction({
      ...cashTransaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleCashTransactionSubmit = () => {
    console.log(cashTransaction);
    props.submitCashTransaction(cashTransaction);
  };

  const handleClearCashTransaction = () => {
    setCashTransaction(buildInitialState());
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
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={cashTransaction.category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value={'Groceries'}>Groceries</MenuItem>
            <MenuItem value={'Shopping'}>Shopping</MenuItem>
            <MenuItem value={'Healthcare'}>Healthcare</MenuItem>
            <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="account-select-label">Account</InputLabel>
          <Select
            labelId="account-select-label"
            value={cashTransaction.accountName}
            label="Account"
            onChange={handleAccountChange}
          >
            <MenuItem value={'Cash'}>Cash</MenuItem>
            <MenuItem value={'Contract'}>Contract</MenuItem>
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
          <Button variant="contained" onClick={handleClearCashTransaction}>
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log(state.postTransStatus);
  return { postStatus: state.postTransStatus };
};

export default connect(mapStateToProps, { submitCashTransaction })(
  CashTransaction
);
