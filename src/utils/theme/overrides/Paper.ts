import { Theme } from '@mui/material/styles';

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      variants: [
        {
          props: { variant: 'outlined' },
        },
      ],

      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
}
