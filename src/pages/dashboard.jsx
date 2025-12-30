import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Dashboard() {
  const [range, setRange] = useState("Today");

  const recentDonations = [
    { campaign: "Flood Relief", location: "Karachi", category: "Food", type: "Zakat", amount: 500, status: "Pending" },
    { campaign: "Education Fund", location: "Lahore", category: "Education", type: "Sadqah", amount: 1000, status: "Verified" },
    { campaign: "Medical Aid", location: "Islamabad", category: "Medical", type: "Fitra", amount: 700, status: "Pending" },
  ];


  return (
    <div>
      
      {/* Blurred background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <div className="p-6 space-y-6">
        {/* Top cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Total Donations */}
          <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
            <CardHeader>
              <CardTitle className="text-green-400">Total Donations</CardTitle>
              <CardDescription className="text-green-100 text-2xl font-bold">
                PKR 150,000
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Donations Filter */}
          <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
            <CardHeader className="flex justify-between items-center">
              <div>
                <CardTitle className="text-green-400">Donations</CardTitle>
                <CardDescription className="text-green-100 text-2xl font-bold">
                  PKR 12,500
                </CardDescription>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-2 py-1 bg-green-400/30 rounded-md text-green-200 hover:bg-green-400/50">
                  {range} <ChevronDown className="inline ml-1" size={16} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-green-400/20 border border-green-400/40 text-green-100 backdrop-blur-xl">
                  <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Today')}>Today</DropdownMenuItem>
                  <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Last Week')}>Last Week</DropdownMenuItem>
                  <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Last Month')}>Last Month</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Donations */}
        <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition overflow-x-auto">
          <CardHeader>
            <CardTitle className="text-green-400">Recent Donations</CardTitle>
          </CardHeader>

          <CardContent>
            <table className="w-full min-w-max text-left text-green-100">
              <thead>
                <tr className="border-b border-green-300/30">
                  <th className="py-2 px-3">Campaign</th>
                  <th className="py-2 px-3">Location</th>
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Amount</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentDonations.map((d, i) => (
                  <tr key={i} className="border-b border-green-300/20 hover:bg-green-400/10">
                    <td className="py-2 px-3">{d.campaign}</td>
                    <td className="py-2 px-3">{d.location}</td>
                    <td className="py-2 px-3">{d.category}</td>
                    <td className="py-2 px-3">{d.type}</td>
                    <td className="py-2 px-3">PKR {d.amount}</td>

                    <td className="py-2 px-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${d.status === "Verified"
                          ? "bg-green-300/30 text-green-300 border border-green-300/40"
                          : "bg-yellow-300/20 text-yellow-300 border border-yellow-300/40"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



//before responsive

// import { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";

// export function Dashboard() {
//   const [range, setRange] = useState("Today");

//   const recentDonations = [
//     { campaign: "Flood Relief", location: "Karachi", category: "Food", type: "Zakat", amount: 500, status: "Pending" },
//     { campaign: "Education Fund", location: "Lahore", category: "Education", type: "Sadqah", amount: 1000, status: "Verified" },
//     { campaign: "Medical Aid", location: "Islamabad", category: "Medical", type: "Fitra", amount: 700, status: "Pending" },
//   ];


//   return (
//     <div>
      
//       {/* Blurred background circles */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10"></div>
//         <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl bottom-10 right-10"></div>
//       </div>

//       <div className="p-6 space-y-6">
//         {/* Top cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Total Donations */}
//           <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
//             <CardHeader>
//               <CardTitle className="text-green-400">Total Donations</CardTitle>
//               <CardDescription className="text-green-100 text-2xl font-bold">
//                 PKR 150,000
//               </CardDescription>
//             </CardHeader>
//           </Card>

//           {/* Donations Filter */}
//           <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
//             <CardHeader className="flex justify-between items-center">
//               <div>
//                 <CardTitle className="text-green-400">Donations</CardTitle>
//                 <CardDescription className="text-green-100 text-2xl font-bold">
//                   PKR 12,500
//                 </CardDescription>
//               </div>

//               <DropdownMenu>
//                 <DropdownMenuTrigger className="px-2 py-1 bg-green-400/30 rounded-md text-green-200 hover:bg-green-400/50">
//                   {range} <ChevronDown className="inline ml-1" size={16} />
//                 </DropdownMenuTrigger>

//                 <DropdownMenuContent className="bg-green-400/20 border border-green-400/40 text-green-100 backdrop-blur-xl">
//                   <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Today')}>Today</DropdownMenuItem>
//                   <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Last Week')}>Last Week</DropdownMenuItem>
//                   <DropdownMenuItem className="data-[highlighted]:bg-green-200 data-[highlighted]:text-green-700" onClick={() => setRange('Last Month')}>Last Month</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </CardHeader>
//           </Card>
//         </div>

//         {/* Recent Donations */}
//         <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
//           <CardHeader>
//             <CardTitle className="text-green-400">Recent Donations</CardTitle>
//           </CardHeader>

//           <CardContent>
//             <table className="w-full text-left text-green-100">
//               <thead>
//                 <tr className="border-b border-green-300/30">
//                   <th className="py-2 px-3">Campaign</th>
//                   <th className="py-2 px-3">Location</th>
//                   <th className="py-2 px-3">Category</th>
//                   <th className="py-2 px-3">Type</th>
//                   <th className="py-2 px-3">Amount</th>
//                   <th className="py-2 px-3">Status</th>
//                 </tr>
//               </thead>


//               <tbody>
//                 {recentDonations.map((d, i) => (
//                   <tr key={i} className="border-b border-green-300/20 hover:bg-green-400/10">
//                     <td className="py-2 px-3">{d.campaign}</td>
//                     <td className="py-2 px-3">{d.location}</td>
//                     <td className="py-2 px-3">{d.category}</td>
//                     <td className="py-2 px-3">{d.type}</td>
//                     <td className="py-2 px-3">PKR {d.amount}</td>

//                     <td className="py-2 px-3">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-semibold
//                         ${d.status === "Verified"
//                           ? "bg-green-300/30 text-green-300 border border-green-300/40"
//                           : "bg-yellow-300/20 text-yellow-300 border border-yellow-300/40"
//                         }`}
//                       >
//                         {d.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
