// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { LoginSchema, loginSchema } from "@/utils/apis/types";

const LoginForm = () => {
  // const form = useForm<LoginSchema>({
  //   resolver: zodResolver(loginSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // async function onSubmitLogin(params: type) {
  //   try {
  //   } catch (error: any) {}
  // }
  return (
    <p>Login Form</p>
    // <div>
    //   <Form {...form}>
    //     <form
    //       onSubmit={form.handleSubmit(onSubmitLogin)}
    //       className="space-y-8"
    //     >
    //       <FormField
    //         control={form.control}
    //         email="email"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Email</FormLabel>
    //             <FormControl>
    //               <Input placeholder="user@gmail.com" {...field} />
    //             </FormControl>
    //             <FormDescription>
    //               This is your public display name.
    //             </FormDescription>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //       <Button type="submit">Submit</Button>
    //     </form>
    //   </Form>
    // </div>
  );
};

export default LoginForm;
