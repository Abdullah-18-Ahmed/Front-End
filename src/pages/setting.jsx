import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export function Settings() {
  const [username, setUsername] = useState("JohnDoe");
  const [email] = useState("johndoe@example.com"); // read-only
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth data if you store tokens later
    navigate("/login");
  };


  const handleSaveUsername = (e) => {
    e.preventDefault();
    alert(`Username updated to ${username}`);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen p-6 space-y-6">
      {/* Blurred background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Top card: Email with Logout button */}
      <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition w-full">
        <CardContent className="flex items-center justify-between py-6">

          {/* left side email text */}
          <div>
            <h2 className="text-green-400 text-left text-2xl">Your Email</h2>
            <p className="text-green-100 text-left text-lg mt-1">{email}</p>
          </div>

          {/* logout button right side */}
          <Button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-semibold bg-red-500/70 hover:bg-red-600/70 border border-red-400/40 rounded-xl backdrop-blur-md shadow-lg shadow-red-900/30"
          >
            Logout
          </Button>

        </CardContent>
      </Card>


      {/* Username & Password update side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Username Update */}
        <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition w-full">
          <CardHeader>
            <CardTitle className="text-green-400 text-left text-2xl">Update Username</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSaveUsername}>
              <div className="grid gap-2">
                <Label className="text-green-100 text-left" htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
                  required
                />
              </div>
              <CardFooter>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-green-800 font-semibold">
                  Save Changes
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>

        {/* Password Update */}
        <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition w-full">
          <CardHeader>
            <CardTitle className="text-green-400 text-left text-2xl">Update Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleUpdatePassword}>
              <div className="grid gap-2">
                <Label className="text-green-100 text-left" htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label className="text-green-100 text-left" htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label className="text-green-100 text-left" htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
                  required
                />
              </div>

              <CardFooter>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-green-800 font-semibold">
                  Save Changes
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
