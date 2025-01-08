"use client";

import * as React from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Users } from "lucide-react";

type Stats = {
  pcount: string;
  rcount: string;
  referenceStats: { reference: string; _count: { reference: number } }[];
};


const COLORS = ["#F48FB1 ", "#607D8B" , "#FFBB28","#0088FE", "#00C49F", "#FF8042", "#AF19FF", "#E91E63","#3F51B5","#FF5722", "#9C27B0"," #FFC107", "#00BCD4", "#795548", "#2196F3","#81D4FA","#B2FF59", "#FFEB3B","#FF8A65","#D1C4E9 ","#80DEEA ","#FFB74D ","#F8BBD0 ","#C5E1A5 ","#4CAF50" ];

export default function Dashboard() {
  const [stats, setStats] = React.useState<Stats>({
    pcount: "0",
    rcount: "0",
    referenceStats: [],
  });
  console.log(stats)

  async function fetchStats() {
    await axios
      .get("/api/stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-6 p-4">
      <div className="grid gap-8 p-5 md:grid-cols-2 lg:grid-cols-3 ">
        <MetricCard
          title="Total Patients"
          value={stats?.pcount}
          icon={Users}
          trend="up"
          trendValue="5.25%"
        />
         <MetricCard
          title="Total References"
          value={stats?.rcount}
          icon={Users}
          trend="up"
          trendValue="5.25%"
        />
         <MetricCard
          title="Unique Reference Sources"
          value={stats?.referenceStats.length.toString()}
          icon={Users}
          trend="up"
          trendValue="5.25%"
        />
      </div>

      {/* Pie Chart for Reference Stats */}
      <Card className="mx-5 shadow-lg font-semibold">
        <CardHeader>
          <CardTitle>Reference Distribution</CardTitle>
        </CardHeader>
        <CardContent style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats.referenceStats}
                dataKey="_count.reference"
                nameKey="reference"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ reference, _count }) =>
                    `${reference}: ${_count.reference}`
                  }
              >
                {stats.referenceStats.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: "up" | "down";
  trendValue: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
