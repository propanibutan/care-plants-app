import { createTheme } from '@mui/material';

//Here is my custom theme for app
const theme = createTheme({ 
    components:{

        MuiListItem: {
            styleOverrides:{
                root: {
                    gutters: 0,
                    padding: 0,
                },
            },
        },

        MuiListItemText: {
          styleOverrides: {
            primary: {
                fontSize: '14px',
                color:'#390277'
            },
          },
        },

        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center'
                },
            },
        },

        MuiSvgIcon: {
          styleOverrides: {
            root:{
                color: '#1976d2',
            },
          },
        },
    },
  });

  export default theme;