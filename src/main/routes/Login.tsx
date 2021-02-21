import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from '@material-ui/core';
import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import NotImplementedDialog from '../components/NotImplementedDialog';

/**
 * Code used from example here: https://github.com/mui-org/material-ui/tree/next/docs/src/pages/getting-started/templates/sign-in
 */
export default function Login(): JSX.Element {
  const [implementedDialogOpen, setImplementedDialogOpen] = useState(false);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            sx={{
              width: '100%', // Fix IE11 issue.
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={() => {
                setImplementedDialogOpen(true);
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid
                item
                xs
                sx={{
                  textAlign: 'left',
                }}
              >
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    setImplementedDialogOpen(true);
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <NotImplementedDialog
        open={implementedDialogOpen}
        setOpen={setImplementedDialogOpen}
      />
    </>
  );
}
