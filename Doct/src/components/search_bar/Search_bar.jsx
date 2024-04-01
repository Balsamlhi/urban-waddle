import React from 'react'
import TextField from "@mui/material/TextField";
import Styles from '../search_bar/Search_bar.module.css'
import sb from '../../assets/sb.png'


function Search_bar() {
  return (
    <>
      <div className={Styles.search}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <button className={Styles.sb}><img className={Styles.sbi} src={sb} alt="" /></button>
    </>
  )
}

export default Search_bar