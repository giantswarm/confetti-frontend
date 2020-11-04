export enum ConfigDeploymentStatus {
    Development,
    Staging,
    Production,
}

export class Config {
    private static instance: Config | null = null;

    public static getInstance(): Config {
        if (Config.instance === null) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    public readonly deploymentStatus: ConfigDeploymentStatus = this.determineDeploymentStatus();

    public readonly backendHost: string = process.env.BACKEND_HOST ?? "localhost:7777";

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
