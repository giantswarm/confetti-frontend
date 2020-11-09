import { Box, Button, Form, FormExtendedEvent, FormField, Heading, Text, TextInput } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    const { Users } = useStore();
    // const router = useRouter();

    const { currentUser } = Users;

    const handleLogin = async (event: FormExtendedEvent<unknown, Element>) => {
        await Users.login(event.value as string);
        // await router.push("/events");
    };

    return (
        <Box fill='vertical' direction='column' justify='center'>
            <Heading level={1} margin={{ top: "none", bottom: "medium" }}>
                Welcome
            </Heading>
            <Form validate='blur' onSubmit={handleLogin}>
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
                    <TextInput required={true} name='name' placeholder='Type a cool nickname here' />
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
