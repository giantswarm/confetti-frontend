import ContainerSolutions from "./ContainerSolutions";
import DevOps from "./DevOps";
import DirektGruppe from "./DirektGruppe";
import Kubernetes from "./Kubernetes";
import MainStage from "./MainStage";
import ManagedApps from "./ManagedApps";
import Monitoring from "./Monitoring";
import MulledWine from "./MulledWine";
import RelEng from "./RelEng";
import RemoteWork from "./RemoteWork";
import Room from "./Room";
import Security from "./Security";
import Spare from "./Spare";
import Viadee from "./Viadee";

export const rooms: Record<string, React.FC<React.ComponentPropsWithoutRef<typeof Room>>> = {
    "direkt-gruppe": DirektGruppe,
    kubernetes: Kubernetes,
    "main-stage": MainStage,
    "mulled-wine": MulledWine,
    "managed-apps": ManagedApps,
    devops: DevOps,
    spare: Spare,
    viadee: Viadee,
    "release-engineering": RelEng,
    security: Security,
    "container-solutions": ContainerSolutions,
    monitoring: Monitoring,
    "remote-work": RemoteWork,
};
