import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

// project imports
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: '60px',
        width: 'initial',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: open ? '24px' : 0,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {open ? (
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: 'inherit',
            textTransform: 'none',
            marginLeft: 1
          }}
        >
          Pharmacity
        </Typography>
      ) : (
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'inherit',
            width: 35,
            height: 35,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          P
        </Typography>
      )}
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };