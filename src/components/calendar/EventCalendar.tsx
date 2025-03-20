import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  X,
} from "lucide-react";
import { format, addMonths, subMonths, isSameDay } from "date-fns";

interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: "activity" | "important" | "holiday";
}

interface EventCalendarProps {
  events?: Event[];
  onEventClick?: (event: Event) => void;
  className?: string;
}

const EventCalendar = ({
  events = [
    {
      id: "1",
      title: "Pajama Day",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
      description:
        "Children can wear their favorite pajamas to daycare for a fun and cozy day of activities.",
      type: "activity",
    },
    {
      id: "2",
      title: "Parent-Teacher Meetings",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
      description:
        "Schedule a 30-minute slot to discuss your child's progress and development.",
      type: "important",
    },
    {
      id: "3",
      title: "Daycare Closed - Staff Training",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
      description:
        "The daycare will be closed for annual staff training and development.",
      type: "holiday",
    },
  ],
  onEventClick = () => {},
  className = "",
}: EventCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;

    const eventsOnDay = events.filter((event) => isSameDay(event.date, day));
    if (eventsOnDay.length > 0) {
      setSelectedEvent(eventsOnDay[0]);
      setIsDialogOpen(true);
      onEventClick(eventsOnDay[0]);
    }
  };

  // Function to determine if a date has events
  const getDayClassNames = (date: Date) => {
    const hasEvents = events.some((event) => isSameDay(event.date, date));
    return hasEvents ? "bg-primary/20 font-bold" : "";
  };

  // Function to get event badge color based on type
  const getEventBadgeColor = (type: Event["type"]) => {
    switch (type) {
      case "activity":
        return "bg-blue-100 text-blue-800";
      case "important":
        return "bg-red-100 text-red-800";
      case "holiday":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-md", className)}>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              Events Calendar
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousMonth}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium">
                {format(currentMonth, "MMMM yyyy")}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>
            View upcoming events, activities, and important dates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            month={currentMonth}
            onDayClick={handleDayClick}
            modifiers={{
              hasEvent: (date) =>
                events.some((event) => isSameDay(event.date, date)),
            }}
            modifiersClassNames={{
              hasEvent: "bg-primary/20 font-bold",
            }}
            className="rounded-md border"
          />

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>
            <ScrollArea className="h-[200px]">
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 border rounded-md cursor-pointer hover:bg-muted transition-colors"
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsDialogOpen(true);
                      onEventClick(event);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {format(event.date, "EEEE, MMMM do")}
                        </p>
                      </div>
                      <Badge className={getEventBadgeColor(event.type)}>
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>{selectedEvent?.title}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDialogOpen(false)}
                className="h-6 w-6 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
            <DialogDescription>
              {selectedEvent && (
                <div className="mt-2">
                  <Badge
                    className={
                      selectedEvent
                        ? getEventBadgeColor(selectedEvent.type)
                        : ""
                    }
                  >
                    {selectedEvent?.type.charAt(0).toUpperCase() +
                      selectedEvent?.type.slice(1)}
                  </Badge>
                  <p className="mt-2 font-medium">
                    {selectedEvent &&
                      format(selectedEvent.date, "EEEE, MMMM do, yyyy")}
                  </p>
                  <p className="mt-4 text-sm">{selectedEvent?.description}</p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventCalendar;
