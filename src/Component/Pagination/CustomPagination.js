import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./CustomPagination.css"

const CustomPagination = ({ page, totalPages, handlePageChange }) => {
  const handleChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <Stack spacing={2} alignItems="center" className="pagination-container" >
      <Pagination
        className='pg'
        count={totalPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default CustomPagination;
