import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function MyDonations() {
  // Example user donations data
  const myDonations = [
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

      {/* My Donations List */}
      <Card className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
        <CardHeader>
          <CardTitle className="text-green-400">My Donations</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full text-left text-green-100">
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
              {myDonations.map((d, i) => (
                <tr key={i} className="border-b border-green-300/20 hover:bg-green-400/10 transition">
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
  );
}
