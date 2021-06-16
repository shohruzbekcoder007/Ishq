import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Maqolaning mavzusini tanlang" variant="outlined" />}
    />
  );
}

const top100Films = [
  { title: 'Iqtisodiyot', year: 1994 },
  { title: 'Siyosat', year: 1972 },
  { title: 'Sport', year: 1974 },
  { title: 'Ijtimoiy soha', year: 2008 },
  { title: 'Boshqa', year: 1957 }
];
