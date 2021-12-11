import {Icon} from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
// material
import {Button, Divider, Stack, Typography} from '@mui/material';

// ----------------------------------------------------------------------

export default function AuthSocial() {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <a href="https://www.ubtuit.uz/uz">
                        <img src={'https://www.ubtuit.uz/images/logo.png'} height={24} alt="Image"/>
                    </a>
                </Button>

                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <a href="https://student.ubtuit.uz">
                        <img src={'https://student.ubtuit.uz/favicon.ico'} height={24} alt="Image"/>
                    </a>
                </Button>

                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <a href="https://moodle.ubtuit.uz">
                        <img src={'https://moodle.ubtuit.uz/theme/image.php/boost/theme/1632931828/favicon'} height={24} alt="Image"/>
                    </a>
                </Button>
            </Stack>

            <Divider sx={{my: 3}}>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    Yoki
                </Typography>
            </Divider>
        </>
    );
}
