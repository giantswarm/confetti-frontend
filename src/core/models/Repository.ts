import { configure } from "mobx";

configure({ enforceActions: "observed" });

export abstract class Repository {}
