import { EventsWatcherDefaultEventPayloads } from "./types/default/default";
import { EventsWatcherOnsiteEventPayloads } from "./types/onsite/onsite";

export type EventsWatcherPayloads = EventsWatcherDefaultEventPayloads | EventsWatcherOnsiteEventPayloads;
