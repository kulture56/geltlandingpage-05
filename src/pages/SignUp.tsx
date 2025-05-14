import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, User, Lock, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define investment interests options
const investmentOptions = [
  "STOCKS",
  "SACCOS",
  "CRYPTOCURRENCIES",
  "BANKS",
  "TBILLS",
  "MMFS",
  "FUNDS",
  "FOREX",
  "INDICES",
  "VENTURE CAPITAL",
  "REAL ESTATE",
  "INSURANCE",
];

// Define the form validation schema
const formSchema = z
  .object({
    fullName: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must include at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must include at least one number" }),
    confirmPassword: z.string(),
    investmentInterests: z
      .array(z.string())
      .min(1, { message: "Please select at least one investment interest" }),
    // Changed from literal true to boolean().refine to avoid the type issue
    acceptTerms: z.boolean().refine(val => val === true, {
      message: "You must accept the terms to continue",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      investmentInterests: [],
      acceptTerms: false, // This was the source of the type error
    },
  });

  // Handle form submission
  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Account created!",
        description: "Karibu GELT! Your investment journey begins now.",
        duration: 5000,
      });
      
      // Redirect to home after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
    
    console.log(values);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-12">
      {submitted ? (
        <div className="animate-fade-in flex flex-col items-center justify-center py-16">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
            <Check className="text-white h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Welcome to GELT!</h2>
          <p className="text-center text-muted-foreground">
            Your account has been created successfully. Redirecting you shortly...
          </p>
        </div>
      ) : (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join the GELT Community
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="Enter your full name" 
                            className="pl-9" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="Your email address" 
                            className="pl-9"
                            type="email"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            className="pl-9"
                            placeholder="Create a strong password"
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-muted-foreground"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <p className="text-xs text-muted-foreground mt-1">
                        Include 8+ characters, uppercase, lowercase and numbers
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            className="pl-9"
                            placeholder="Confirm your password"
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-muted-foreground"
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="investmentInterests"
                  render={() => (
                    <FormItem>
                      <FormLabel>Investment Interests</FormLabel>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {investmentOptions.map((option) => (
                          <FormField
                            key={option}
                            control={form.control}
                            name="investmentInterests"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option}
                                  className="flex items-start space-x-2 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    #{option}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I accept the terms of use
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      Jiunge Sasa <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
