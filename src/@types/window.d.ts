interface ConfettiEnv {
    CONFETTI_BACKEND_HOST: string;
    CONFETTI_BACKEND_HOST_SECURE: string;
}

interface Window {
    confettiEnv: ConfettiEnv;
}
