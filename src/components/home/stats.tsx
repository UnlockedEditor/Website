"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, LabelList, Cell } from "recharts"
import { useEffect, useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--chart-1)",
  },
  label: {
    color: "var(--blue-500)",
  },
} satisfies ChartConfig

export default function Stats() {
  const [chartData, setChartData] = useState([
    { action: "Actors Destroyed", count: 0, color: "hsl(0 84% 60%)" },
    { action: "Actors Spawned", count: 0, color: "hsl(142 72% 29%)" },
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        
        if (response.ok) {
          setChartData([
            { action: "Actors Destroyed", count: data.ActorsDestroyed, color: "hsl(0 84% 60%)" },
            { action: "Actors Spawned", count: data.ActorsSpawned, color: "hsl(142 72% 29%)" },
          ])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-20 lg:py-20 max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            See what's happening right now
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            See what's being created with UEditor all over the world.
          </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Stats - Actors</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    margin={{
                    right: 16,
                    }}
                >
                    <CartesianGrid horizontal={false} />
                    <YAxis
                    dataKey="action"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                    />
                    <XAxis dataKey="count" type="number" hide />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" className="bg-black" />}
                    />
                    <Bar
                    dataKey="count"
                    layout="vertical"
                    radius={4}
                    >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList
                        dataKey="action"
                        position="insideLeft"
                        offset={8}
                        className="fill-[--color-label] font-bold"
                        fontSize={12}
                    />
                    <LabelList
                        dataKey="count"
                        position="right"
                        offset={8}
                        className="fill-white"
                        fontSize={12}
                    />
                    </Bar>
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                Real-time actor statistics
                </div>
                <div className="leading-none text-muted-foreground">
                Updates every 5 seconds
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
