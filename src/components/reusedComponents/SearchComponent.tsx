import React, {KeyboardEvent, useState} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
   formik: any,
    placeholder:string,
    searchedName:string,
    setSearchedName(value:string):void

}

const SearchComponent:React.FC<Props> = ({formik,placeholder,searchedName,setSearchedName}) => {
    const handleSearch = (e:KeyboardEvent<HTMLImageElement>) => {
        if (e.key==="Enter"){
            e.preventDefault()
            setSearchedName(formik.values.search)
        }

    };
    const handleSetSearchedName = () => {
        setSearchedName(formik.values.search)

    }

    return (
       <>
           <TextField
               name="search"
               placeholder={placeholder}
               size="medium"
               sx={{
                   backgroundColor: "primary.light", color: "primary.main", '&::placeholder': {
                       textOverflow: 'ellipsis !important',
                       color: 'blue',
                       outline: 'none'
                   }
               }}
               fullWidth
               type={"search"}
               onChange={formik.handleChange}
               onKeyDown={handleSearch}
               InputProps={{
                   style: {color: "primary.main"},
                   startAdornment: <InputAdornment position="start"><IconButton
                       sx={{p: '10px', color: "primary.main"}}>
                       <SearchIcon onClick={handleSetSearchedName}/>
                   </IconButton></InputAdornment>
               }}
           />
       </>
    );
};

export default SearchComponent;