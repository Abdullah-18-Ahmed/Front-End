import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // later replace with backend auth
    alert("Account created successfully");

    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <Card className="w-full max-w-sm border-blue-800/40 bg-blue-950/60 backdrop-blur-xl shadow-2xl shadow-blue-900/40">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-green-400">
            DonationBoard
          </CardTitle>

          <CardDescription className="text-blue-200">
            Create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignup} className="flex flex-col gap-6">
            {/* Name */}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-blue-100">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-green-400"
                required
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-blue-100">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-green-400"
                required
              />
            </div>

            {/* Phone */}
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-blue-100">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0300-1234567"
                className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-blue-100">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <Link
            to="/login"
            className="w-full text-center text-green-400 hover:text-green-300 block"
          >
            Already have an account? Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
