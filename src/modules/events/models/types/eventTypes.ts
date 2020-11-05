import { Event } from "@/modules/events/models/Event";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";

export type EventType = "default" | "onsite";

export type RemoteEvent = Event | OnsiteEvent;
