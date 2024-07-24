import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: theme.palette.secondary.main, 
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.secondary.main, 
    color: '#FFFFFF', 
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const GalleryPagination = ({ count, currentPage, onChange }) => {
  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledPagination count={count} page={currentPage} onChange={onChange} />
    </Stack>
  );
};

export default GalleryPagination;
