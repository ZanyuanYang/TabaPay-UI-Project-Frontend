import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonComponent() {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Skeleton
        sx={{
          width: '80%',
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
      />
      <Skeleton
        sx={{
          width: '60%',
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
        animation="wave"
      />
      <Skeleton
        animation={false}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
      />
      <Skeleton
        sx={{
          width: '80%',
          marginTop: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
      />
      <Skeleton
        sx={{
          width: '60%',
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
        animation="wave"
      />
      <Skeleton
        animation={false}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
      />
      <Skeleton
        sx={{
          width: '80%',
          marginTop: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
      />
      <Skeleton
        sx={{
          width: '60%',
          backgroundColor: 'rgba(0, 0, 0, 0.11)',
        }}
        animation="wave"
      />
      <Skeleton animation={false} />
    </Box>
  );
}
