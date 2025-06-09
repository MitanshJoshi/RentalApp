import { Authenticator, Radio, useAuthenticator, View, Heading, RadioGroupField } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

Amplify.configure({
    Auth: {
            Cognito: {
                userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!, 
                userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
            }  
    }
});
const components = {
    Header() {
      return (
        <View className="mt-4 mb-7">
          <Heading level={3} className="!text-2xl !font-bold">
            RENT
            <span className="text-secondary-500 font-light hover:!text-primary-300">
              IFUL
            </span>
          </Heading>
          <p className="text-muted-foreground mt-2">
            <span className="font-bold">Welcome!</span> Please sign in to continue
          </p>
        </View>
      );
    },
    SignIn: {
      Footer() {
        const { toSignUp } = useAuthenticator();
        return (
          <View className="text-center mt-4">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                onClick={toSignUp}
                className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Sign up here
              </button>
            </p>
          </View>
        );
      },
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();
  
        return (
          <>
            <Authenticator.SignUp.FormFields />
            <RadioGroupField
              legend="Role"
              name="custom:role"
              errorMessage={validationErrors?.["custom:role"]}
              hasError={!!validationErrors?.["custom:role"]}
              isRequired
            >
              <Radio value="tenant">Tenant</Radio>
              <Radio value="manager">Manager</Radio>
            </RadioGroupField>
          </>
        );
      },
  
      Footer() {
        const { toSignIn } = useAuthenticator();
        return (
          <View className="text-center mt-4">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={toSignIn}
                className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Sign in
              </button>
            </p>
          </View>
        );
      },
    },
  };
  
  const formFields = {
    signIn: {
      username: {
        placeholder: "Enter your email",
        label: "Email",
        isRequired: true,
      },
      password: {
        placeholder: "Enter your password",
        label: "Password",
        isRequired: true,
      },
    },
    signUp: {
      username: {
        order: 1,
        placeholder: "Choose a username",
        label: "Username",
        isRequired: true,
      },
      email: {
        order: 2,
        placeholder: "Enter your email address",
        label: "Email",
        isRequired: true,
      },
      password: {
        order: 3,
        placeholder: "Create a password",
        label: "Password",
        isRequired: true,
      },
      confirm_password: {
        order: 4,
        placeholder: "Confirm your password",
        label: "Confirm Password",
        isRequired: true,
      },
    },
  };


export const Auth = ({children}:{children:ReactNode}) => {
    const { user }= useAuthenticator((context) => [context.user]);
    const router = useRouter();
    const pathname = usePathname();

    const isAuthPage = pathname === '/signup' || pathname === '/signin';

    const isDashboardPage = pathname.startsWith('/manager') || pathname.startsWith('/tenant');

    useEffect(() => {
     if(user && isAuthPage){
        router.push("/")
     }
    }, [user, isAuthPage, router]);
    



    console.log("Auth Provider Pathname: ", pathname);
      
    if(!isAuthPage && !isDashboardPage)
    {
        return <>{children}</>;
    }
 
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <Authenticator initialState={pathname.includes("signup")?"signUp":"signIn"} components={components} formFields={formFields}>
                    {() => <>{children}</>}
                </Authenticator>
            </div>
        );
    

    // // Default: show only sign in
    // return (
    //     <div className="h-screen w-screen flex items-center justify-center">
    //         <Authenticator initialState="signIn" components={components} formFields={formFields}>
    //             {() => <>{children}</>}
    //         </Authenticator>
    //     </div>
    // );
}