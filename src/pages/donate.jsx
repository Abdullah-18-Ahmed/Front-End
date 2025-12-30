import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Donate() {
  const location = useLocation();
  const preselectedCampaign = location.state?.campaign || "";

  const [campaign, setCampaign] = useState(preselectedCampaign);
  const [donationAmount, setDonationAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");

  const campaigns = ["Ramadan Relief", "Flood Relief", "Education Fund", "Medical Aid"];
  const types = ["Zakat", "Sadqah", "Fitra", "General"];
  const categories = ["Food", "Education", "Medical"];
  const payments = ["Cash", "Bank", "Online"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(donationAmount) < 100) {
      alert("Donation amount must be at least 100 PKR.");
      return;
    }
    console.log({ campaign, donationAmount, type, category, payment });
    alert(`Donation submitted for ${campaign}!`);
  };

  const renderDropdown = (label, value, setValue, options) => (
    <div className="grid gap-2">
      <Label className="text-green-400">{label}</Label>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-md text-green-100 flex justify-between items-center">
          {value || `Select ${label.toLowerCase()}`} <ChevronDown className="ml-2" size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-green-400/20 border border-green-400/40 text-green-100 backdrop-blur-xl">
          {options.map((opt) => (
            <DropdownMenuItem
              key={opt}
              className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700"
              onClick={() => setValue(opt)}
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full items-center justify-center relative p-4">
      <Card className="w-full max-w-lg bg-green-400/20 backdrop-blur-xl border border-green-400/30 shadow-xl shadow-green-900/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-400">Donate</CardTitle>
          <CardDescription className="text-green-100">
            Fill in the details below to make a donation
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {renderDropdown("Campaign", campaign, setCampaign, campaigns)}

            <div className="grid gap-2">
              <Label className="text-green-400">Donation Amount</Label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
                required
              />
            </div>

            {renderDropdown("Type", type, setType, types)}
            {renderDropdown("Category", category, setCategory, categories)}
            {renderDropdown("Payment Method", payment, setPayment, payments)}

            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-green-800 font-semibold"
              >
                Donate Now
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}



//before responsive

// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";

// export function Donate() {
//   const location = useLocation();
//   const preselectedCampaign = location.state?.campaign || "";

//   const [campaign, setCampaign] = useState(preselectedCampaign);
//   const [donationAmount, setDonationAmount] = useState("");
//   const [type, setType] = useState("");
//   const [category, setCategory] = useState("");
//   const [payment, setPayment] = useState("");

//   const campaigns = ["Ramadan Relief", "Flood Relief", "Education Fund", "Medical Aid"];
//   const types = ["Zakat", "Sadqah", "Fitra", "General"];
//   const categories = ["Food", "Education", "Medical"];
//   const payments = ["Cash", "Bank", "Online"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Number(donationAmount) < 100) {
//       alert("Donation amount must be at least 100 PKR.");
//       return;
//     }
//     console.log({ campaign, donationAmount, type, category, payment });
//     alert(`Donation submitted for ${campaign}!`);
//   };

//   const renderDropdown = (label, value, setValue, options) => (
//     <div className="grid gap-2">
//       <Label className="text-green-400">{label}</Label>
//       <DropdownMenu>
//         <DropdownMenuTrigger className="px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-md text-green-100 flex justify-between items-center">
//           {value || `Select ${label.toLowerCase()}`} <ChevronDown className="ml-2" size={16} />
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="bg-green-400/20 border border-green-400/40 text-green-100 backdrop-blur-xl">
//           {options.map((opt) => (
//             <DropdownMenuItem
//               key={opt}
//               className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700"
//               onClick={() => setValue(opt)}
//             >
//               {opt}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );

//   return (
//     <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 relative">
//       <Card className="w-full max-w-lg bg-green-400/20 backdrop-blur-xl border border-green-400/30 shadow-xl shadow-green-900/20">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold text-green-400">Donate</CardTitle>
//           <CardDescription className="text-green-100">
//             Fill in the details below to make a donation
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//             {renderDropdown("Campaign", campaign, setCampaign, campaigns)}

//             <div className="grid gap-2">
//               <Label className="text-green-400">Donation Amount</Label>
//               <Input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={donationAmount}
//                 onChange={(e) => setDonationAmount(e.target.value)}
//                 className="bg-green-400/10 border border-green-400/30 text-green-100 placeholder-green-200 focus-visible:ring-green-500"
//                 required
//               />
//             </div>

//             {renderDropdown("Type", type, setType, types)}
//             {renderDropdown("Category", category, setCategory, categories)}
//             {renderDropdown("Payment Method", payment, setPayment, payments)}

//             <CardFooter>
//               <Button
//                 type="submit"
//                 className="w-full bg-green-500 hover:bg-green-600 text-green-800 font-semibold"
//               >
//                 Donate Now
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
