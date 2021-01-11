import { Box, Button, Form, FormExtendedEvent, FormField, Heading, Text, TextInput } from "grommet";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { isLocalUrl } from "@/utils/isLocalUrl";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    const { Users } = useStore();
    const { push, query } = useRouter();
    let redirectPath: string = "/";
    if (typeof query.redirectTo === "string" && isLocalUrl(query.redirectTo)) {
        redirectPath = decodeURIComponent(query.redirectTo);
    }

    const { currentUser, tryToRestoreUser, login } = Users;

    useEffect(() => {
        tryToRestoreUser();
        if (currentUser.data) {
            push(redirectPath);
        }
    }, [tryToRestoreUser, currentUser, push, redirectPath]);

    const handleLogin = async (event: FormExtendedEvent<unknown, Element>) => {
        await login(event.value as string);
        if (currentUser.data) {
            await push(redirectPath);
        }
    };

    return (
        <Box fill='vertical' direction='column' justify='center'>
            <Heading level={1} margin={{ top: "none", bottom: "medium" }}>
                Welcome
            </Heading>
            <Form onSubmit={handleLogin}>
                <FormField
                    name='name'
                    label={
                        <>
                            <Text>Your name</Text>
                            <Text margin={{ left: "xxsmall" }} color='status-critical'>
                                *
                            </Text>
                        </>
                    }
                    error={currentUser.error}
                >
                    <TextInput
                        required={true}
                        name='name'
                        placeholder='Type a cool nickname here'
                        disabled={currentUser.loading}
                    />
                </FormField>

                <Box direction='row' justify='between' align='center'>
                    <Box direction='row' align='center'>
                        <Button
                            type='submit'
                            label='Enter'
                            primary={true}
                            color='white'
                            disabled={currentUser.loading}
                        />
                        <Text margin={{ left: "small" }} size='small' color='status-critical'>
                            * Required Field
                        </Text>
                    </Box>

                    {currentUser.loading && (
                        <Box>
                            <Spinner size='medium' />
                        </Box>
                    )}
                </Box>
            </Form>
        </Box>
    );
};

export default observer(LoginForm);
