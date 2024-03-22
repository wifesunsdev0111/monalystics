export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    profile: '/dashboard/profile',
    influencers: '/dashboard/influencers',
    campaign: '/dashboard/campaign',
    analysis: '/dashboard/analysis',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
