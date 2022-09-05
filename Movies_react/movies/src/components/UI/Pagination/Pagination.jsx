import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MoviesPagination({ count, changeCurrentPage }) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} variant="outlined" shape="rounded" onChange={(_, pageNum) => changeCurrentPage(_, pageNum)} />
    </Stack>
  );
}