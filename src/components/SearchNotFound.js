import PropTypes from 'prop-types';
// material
import {Paper, Typography} from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
    searchQuery: PropTypes.string
};

export default function SearchNotFound({searchQuery = '', ...other}) {
    return (
        <Paper {...other}>
            <Typography gutterBottom align="center" variant="subtitle1">
                Hech narsa topilmadi
            </Typography>
            <Typography variant="body2" align="center">
                <strong>&quot;{searchQuery}&quot;</strong>. &nbsp; bo&#8216;yicha hech narsa topilmadi.
                Yozuv xatolarini tekshirib ko&#8216;ring yoki to&#8216;liq so&#8216;zlardan foydalaning.
            </Typography>
        </Paper>
    );
}
