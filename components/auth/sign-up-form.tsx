"use client";

import * as React from "react";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";

import { paths } from "@/paths";
import { authClient } from "@/lib/auth/client";
import { useUser } from "@/hooks/use-user";

const schema = zod.object({
  companyName: zod.string().min(1, { message: "Company name is required" }),
  email: zod.string().min(1, { message: "Email is required" }).email(),
  sectorofOperation: zod
    .string()
    .min(1, { message: "Sector of operation is required" }),
  password: zod
    .string()
    .min(6, { message: "Password should be at least 6 characters" })
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  companyName: "",
  sectorofOperation: "",
  email: "",
  password: ""
} satisfies Values;

export function SignUpForm(): React.JSX.Element {
  const router = useRouter();

  const { checkSession } = useUser();

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

      const { error } = await authClient.signUp(values);

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
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h3" className="roboto-medium">
          Sign up
        </Typography>
        <Typography
          color="text.secondary"
          variant="body1"
          className="roboto-light"
        >
          Welcome! Please enter your details.
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h6" className="roboto-medium">
              Company name
            </Typography>
            <Controller
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormControl
                  error={Boolean(errors.companyName)}
                  className="roboto-light"
                >
                  <InputLabel>Company name</InputLabel>
                  <OutlinedInput {...field} label="Company name" />
                  {errors.companyName ? (
                    <FormHelperText>
                      {errors.companyName.message}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
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
                  <InputLabel>Email address</InputLabel>
                  <OutlinedInput
                    {...field}
                    label="Email address"
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
              Sector of operation
            </Typography>
            <Controller
              control={control}
              name="sectorofOperation"
              render={({ field }) => (
                <FormControl
                  error={Boolean(errors.sectorofOperation)}
                  className="roboto-light"
                >
                  <InputLabel>Sector of operation</InputLabel>
                  <OutlinedInput {...field} label="Sector of operation" />
                  {errors.sectorofOperation ? (
                    <FormHelperText>
                      {errors.sectorofOperation.message}
                    </FormHelperText>
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
                  <OutlinedInput {...field} label="Password" type="password" />
                  {errors.password ? (
                    <FormHelperText>{errors.password.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
          </Stack>
        </Stack>
        <Stack spacing={3}>
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
              marginTop: "7vh"
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
                alt="Image"
                width={20}
                height={20}
              />
            }
          >
            Sign in with Google
          </Button>
        </Stack>
      </form>
      <Typography
        color="text.secondary"
        variant="body2"
        className="roboto-light flex justify-center"
      >
        Already have an account? &nbsp;
        <Link
          component={RouterLink}
          href={paths.auth.signIn}
          underline="hover"
          variant="subtitle2"
        >
          Sign in
        </Link>
      </Typography>
    </Stack>
  );
}
