export enum ConfigDeploymentStatus {
    Development,
    Staging,
    Production,
}

export class Config {
    public readonly deploymentStatus: ConfigDeploymentStatus = this.determineDeploymentStatus();

    public readonly sourceURL = "https://github.com/giantswarm/confetti-frontend";

    public backendHostSecure = false;

    public backendHost = "localhost:7777";

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

export interface PublicRuntimeConfig {
    backendHostSecure: boolean;
    backendHost: string;
}

export function makeInitialConfigInstance(publicRuntimeConfig: PublicRuntimeConfig): Config {
    const config = new Config();
    config.backendHost = publicRuntimeConfig.backendHost;
    config.backendHostSecure = publicRuntimeConfig.backendHostSecure;

    return config;
}
