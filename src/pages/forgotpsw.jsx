import { useState } from "react";
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
import { Link } from "react-router-dom"; // <-- Import Link

export function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setEmail("");
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
            Forgot your password? Enter your email below
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-blue-100">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-blue-900/40 border-blue-700 text-white placeholder:text-blue-300 focus-visible:ring-green-400"
                required
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
          >
            Send Reset Link
          </Button>

          <Link
            to="/login"
            className="w-full text-center text-green-400 hover:text-green-300 block"
          >
            Back to Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
