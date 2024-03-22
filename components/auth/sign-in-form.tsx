"use client";

import * as React from "react";
import RouterLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Eye as EyeIcon } from "@phosphor-icons/react/dist/ssr/Eye";
import { EyeSlash as EyeSlashIcon } from "@phosphor-icons/react/dist/ssr/EyeSlash";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";

import { paths } from "@/paths";
import { authClient } from "@/lib/auth/client";
import { useUser } from "@/hooks/use-user";

const schema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email(),
  password: zod.string().min(1, { message: "Password is required" }),
  remember: zod.boolean().refine((value) => value, "Remember me")
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  email: "sofia@devias.io",
  password: "Secret1",
  remember: false
} satisfies Values;

export function SignInForm(): React.JSX.Element {
  const router = useRouter();

  const { checkSession } = useUser();

  const [showPassword, setShowPassword] = React.useState<boolean>();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const { error } = await authClient.signInWithPassword(values);

      if (error) {
        setError("root", { type: "server", message: error });
        setIsPending(false);
        return;
      }

      // Refresh the auth state
      await checkSession?.();

      // UserProvider, for this case, will not refresh the router
      // After refresh, GuestGuard will handle the redirect
      router.refresh();
    },
    [checkSession, router, setError]
  );

  return (
    <Stack spacing={4} sx={{ padding: "1vh" }}>
      <Stack spacing={1}>
        <Typography variant="h3" className="roboto-medium">
          Login
        </Typography>
        <Typography
          className="roboto-light"
          color="text.secondary"
          variant="body1"
        >
          Welcome back! Please enter your details.
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h6" className="roboto-medium">
              Email
            </Typography>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <FormControl
                  error={Boolean(errors.email)}
                  className="roboto-light"
                >
                  <InputLabel>Enter your email</InputLabel>
                  <OutlinedInput
                    {...field}
                    label="Enter your email"
                    type="email"
                  />
                  {errors.email ? (
                    <FormHelperText>{errors.email.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" className="roboto-medium">
              Password
            </Typography>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <FormControl
                  error={Boolean(errors.password)}
                  className="roboto-light"
                >
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    {...field}
                    endAdornment={
                      showPassword ? (
                        <EyeIcon
                          cursor="pointer"
                          fontSize="var(--icon-fontSize-md)"
                          onClick={(): void => {
                            setShowPassword(false);
                          }}
                        />
                      ) : (
                        <EyeSlashIcon
                          cursor="pointer"
                          fontSize="var(--icon-fontSize-md)"
                          onClick={(): void => {
                            setShowPassword(true);
                          }}
                        />
                      )
                    }
                    label="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  {errors.password ? (
                    <FormHelperText>{errors.password.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Box
            sx={{
              display: { xs: "flex", lg: "grid", paddingTop: "2vh" },
              flexDirection: "column",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "100%"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column"
              }}
            >
              <Controller
                control={control}
                name="remember"
                render={({ field }) => (
                  <div>
                    <FormControlLabel
                      control={<Checkbox {...field} />}
                      label={<React.Fragment>Remember me</React.Fragment>}
                    />
                    {errors.remember ? (
                      <FormHelperText error>
                        {errors.remember.message}
                      </FormHelperText>
                    ) : null}
                  </div>
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column",
                textAlign: "right",
                justifyContent: "center"
              }}
            >
              <div>
                <Link
                  component={RouterLink}
                  href={paths.auth.resetPassword}
                  variant="subtitle2"
                >
                  Forgot password?
                </Link>
              </div>
            </Box>
          </Box>

          {errors.root ? (
            <Alert color="error">{errors.root.message}</Alert>
          ) : null}
          <Button
            disabled={isPending}
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "black",
              height: "6vh",
              fontSize: "1rem",
              marginTop: "3vh"
            }}
            className="bold-medium"
          >
            Sign in
          </Button>
          <Button
            disabled={isPending}
            type="submit"
            variant="outlined"
            style={{ height: "6vh", fontSize: "1rem", color: "black" }}
            className="bold-medium"
            startIcon={
              <Image
                src="/assets/google.svg"
                alt="google"
                width={20}
                height={20}
              />
            }
          >
            Sign in with Google
          </Button>
        </Stack>
      </form>
      <Stack spacing={1}>
        <Typography
          color="text.secondary"
          variant="body2"
          className="flex justify-center"
        >
          Don&apos;t have an account?{" "}
          <Link
            component={RouterLink}
            href={paths.auth.signUp}
            underline="hover"
            variant="subtitle2"
          >
            &nbsp;Sign up for free
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
