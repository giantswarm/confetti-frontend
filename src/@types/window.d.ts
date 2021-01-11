interface ConfettiEnv {
    CONFETTI_PUBLIC_BACKEND_HOST: string;
    CONFETTI_PUBLIC_BACKEND_HOST_SECURE: string;
}

interface Window {
    confettiEnv: ConfettiEnv;
}
