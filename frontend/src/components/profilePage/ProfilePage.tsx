import { Box, Typography, Button, TextField, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';

export default function ProfilePage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordBtn, setShowPasswordBtn] = useState(true);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
      });
    const passwordIsStrong =
        passwordStrength.length &&
        passwordStrength.uppercase &&
        passwordStrength.lowercase &&
        passwordStrength.number &&
        passwordStrength.specialChar;

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        
        if (newPassword === '' || confirmPassword === '') {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(newPassword === confirmPassword);
        }
        
        const strength = {
            length: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            lowercase: /[a-z]/.test(newPassword),
            number: /\d/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
        };
        setPasswordStrength(strength);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        
        if (password === '' || newConfirmPassword === '') {
            setPasswordsMatch(false); 
        } else {
            setPasswordsMatch(newConfirmPassword === password);
        }

    };

    const handleShowPasswordFields = () => {
        setShowPasswordFields(true);
        setShowPasswordBtn(false);
    };

    const handleSetNewPassword = () => {
        if (password !== '' && confirmPassword !== '' && password === confirmPassword) {
            setOpenDialog(true);
            setPassword('');
            setConfirmPassword('');
            setPasswordsMatch(false)
            setShowPasswordFields(false);
            setShowPasswordBtn(true);
            
        } else {
            alert("Passwords don't match. Please try again.");
        }
    };

    const handleCancelPasswordChange = () => {
        setPassword('');
        setConfirmPassword('');
        setPasswordsMatch(false)
        setShowPasswordFields(false);
        setShowPasswordBtn(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
      };

    return (
        <div className='flex flex-row' style={{ height: '100vh', width: '100vw' }}>
            <div style={{ backgroundColor: 'rgba(217, 217, 217, 0.37)', width: '40%', paddingLeft: '4rem', paddingTop: '6rem', height: '100%' }}>
                <Box>
                    <Typography fontFamily='Playfair Display' fontSize={60} fontWeight='medium'>Profile</Typography>
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>Student Account</Typography>
                </Box>
            </div>
            <div className='flex justify-center' style={{ height: '80%', width: '70%', paddingTop: '5rem' }}>
                <div className='flex flex-col justify-around w-7/12'>
                    
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>FirstName</Typography>
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>LastName</Typography>
                    <Typography fontFamily='Inter' fontSize={20} fontWeight={'regular'}>username.email@given.com</Typography>

                    <div style={{width: '60%'}}>
                        {/* Button to show password fields */}
                        {showPasswordBtn && (
                            <>
                                <Button
                                    sx={{ backgroundColor: '#7E729F', '&:hover': { backgroundColor: '#fff', color: '#7E729F', } }}
                                    variant="contained"
                                    onClick={handleShowPasswordFields}
                                >
                                    <Typography fontFamily='Inter' textTransform='none'>Change Password</Typography>
                                </Button>
                            </>
                        )}

                        {/* Conditional rendering of password fields */}
                        {showPasswordFields && (
                            <>
                                <TextField
                                    required
                                    id="pwd"
                                    variant='filled'
                                    label="Password"
                                    type='password'
                                    sx={{ width: '100%', mt: 2 }}
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <Typography variant="body2" 
                                    sx={{ marginTop: 1, color: passwordIsStrong ? '#A6CAA9' : '#D32F2F' }}>
                                    Password Strength: 
                                        {passwordIsStrong ? ' Strong' : ' Weak' }
                                </Typography>
                                <TextField
                                    required
                                    id="confirmPwd"
                                    variant='filled'
                                    label="Confirm Password"
                                    type='password'
                                    sx={{ width: '100%', mt: 2 }}
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    error={!passwordsMatch} 
                                    helperText={!passwordsMatch && 'Passwords do not match'}
                                />
                                <Button
                                    sx={{ backgroundColor: '#A6CAA9', mt: 2 }}
                                    disabled={!passwordsMatch || !passwordIsStrong}
                                    variant="contained"
                                    onClick={handleSetNewPassword}
                                >
                                    <Typography fontFamily='Inter' textTransform='none'>Set New Password</Typography>
                                </Button>
                                <Button
                                    sx={{ backgroundColor: '#000', color: '#fff', mt: 2, ml: 2}}
                                    variant="contained"
                                    onClick={handleCancelPasswordChange}
                                >
                                    <Typography fontFamily='Inter' textTransform='none'>Cancel</Typography>
                                </Button>
                            </>
                        )}
                    </div>
                
                </div>
            </div>

            {/* Dialog for displaying a success message */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogContent>
                    <Typography>Password changed successfully!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
