import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Campaigns() {
  const navigate = useNavigate();

  const campaigns = [
    { name: "Ramadan Relief", desc: "Support needy families during Ramadan." },
    { name: "Flood Relief", desc: "Help victims of recent floods." },
    { name: "Education Fund", desc: "Provide education for underprivileged children." },
    { name: "Medical Aid", desc: "Assist people in getting proper medical care." },
  ];

  return (
    <div className="p-6 space-y-6">
      {campaigns.map((c, idx) => (
        <Card key={idx} className="bg-green-400/20 border border-green-400/30 backdrop-blur-xl shadow-xl shadow-green-900/20 hover:shadow-green-700/50 transition">
          <CardHeader>
            <CardTitle className="text-green-400">{c.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-green-100">{c.desc}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-green-500 hover:bg-green-600 text-green-800"
              onClick={() => navigate("/app/donate", { state: { campaign: c.name } })}
            >
              Donate
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
