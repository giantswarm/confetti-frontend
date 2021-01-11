export enum ConfigDeploymentStatus {
    Development,
    Staging,
    Production,
}

export class Config {
    constructor(confettiEnv?: ConfettiEnv) {
        if (confettiEnv) {
            this.backendHost = confettiEnv.CONFETTI_PUBLIC_BACKEND_HOST ?? "localhost:7777";
            this.backendHostSecure = confettiEnv.CONFETTI_PUBLIC_BACKEND_HOST_SECURE === "true";
        }
    }

    public readonly deploymentStatus: ConfigDeploymentStatus = this.determineDeploymentStatus();

    public readonly sourceURL = "https://github.com/giantswarm/confetti-frontend";

    public readonly backendHostSecure: boolean = false;

    public readonly backendHost: string = "localhost:7777";

    private determineDeploymentStatus(): ConfigDeploymentStatus {
        switch (process.env.DEPLOYMENT_STATUS) {
            case "dev":
                return ConfigDeploymentStatus.Development;
            case "staging":
                return ConfigDeploymentStatus.Staging;
            case "prod":
                return ConfigDeploymentStatus.Production;
            default:
                return ConfigDeploymentStatus.Development;
        }
    }
}
