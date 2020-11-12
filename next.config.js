const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
    let deploymentStatus = "dev";
    switch (true) {
        case phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1":
            deploymentStatus = "staging";
            break;
        case phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1":
            deploymentStatus = "prod";
            break;
    }

    const env = {
        DEPLOYMENT_STATUS: deploymentStatus,
    };

    return {
        env,
        async redirects() {
            return [
                {
                    source: "/",
                    destination: "/events",
                    permanent: false,
                },
            ];
        },
        publicRuntimeConfig: {
            // Will be available on both server and client
            backendHost: process.env.NEXT_PUBLIC_BACKEND_HOST || "localhost:7777",
            backendHostSecure: process.env.NEXT_PUBLIC_BACKEND_HOST_SECURE === "true",
        },
    };
};
