import Planner from "@/components/planner/Planner";
import TimelineActions from "@/components/timeline/TimelineActions";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Card className="rounded-none">
      <CardContent className="p-0">
        <TimelineActions />
        <Separator />
        <Planner />
      </CardContent>
    </Card>
  );
}
