import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder login, later replace with Firebase
    console.log("Logging in...");
    navigate("/app/dashboard"); // redirect after login
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <Card className="w-full max-w-sm border-blue-800/40 bg-blue-950/60 backdrop-blur-xl shadow-2xl shadow-blue-900/40">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-green-400">DonationBoard</CardTitle>
          <CardDescription className="text-blue-200">Login to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-blue-100">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-blue-100">Password</Label>
                <Link
                  to="/forgotpsw"
                  className="text-sm text-green-400 hover:text-green-300 underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 pr-10 focus-visible:ring-green-400"
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-200 hover:text-white"
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                  onMouseLeave={() => setShowPassword(false)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Buttons inside form */}
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
              Login
            </Button>
            <Link
              to="/signup"
              className="w-full text-center text-green-400 hover:text-green-300 block"
            >
              Sign Up
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
