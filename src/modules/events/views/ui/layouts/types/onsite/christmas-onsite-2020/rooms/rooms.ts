import Carousel from "./Carousel";
import ChristmasTree from "./ChristmasTree";
import ContainerSolutions from "./ContainerSolutions";
import DevOps from "./DevOps";
import DirektGruppe from "./DirektGruppe";
import FerrisWheel from "./FerrisWheel";
import IceRink from "./IceRink";
import InfoSignpost from "./InfoSignpost";
import Kubernetes from "./Kubernetes";
import MainStage from "./MainStage";
import ManagedApps from "./ManagedApps";
import Monitoring from "./Monitoring";
import MulledWine from "./MulledWine";
import PhotoBooth from "./PhotoBooth";
import RelEng from "./RelEng";
import RemoteWork from "./RemoteWork";
import Room from "./Room";
import Security from "./Security";
import Spare from "./Spare";
import Viadee from "./Viadee";

export type RoomComponent = React.FC<React.ComponentPropsWithoutRef<typeof Room>>;

export type RoomZone = "main" | "background";

export const rooms: Record<RoomZone, Record<string, RoomComponent>> = {
    main: {
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
        "info-signpost": InfoSignpost,
        "photo-booth": PhotoBooth,
        "christmas-tree": ChristmasTree,
    },
    background: {
        "ferris-wheel": FerrisWheel,
        carousel: Carousel,
        "ice-rink": IceRink,
    },
};
