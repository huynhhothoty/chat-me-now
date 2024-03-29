import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Flex, Form, Input, Spin, Typography } from 'antd';
import { useLogin } from './useLogin';
const { Text } = Typography;

export default function LoginForm({ openReg, openForget, setOpenLogin }) {
    const { login, isLoging } = useLogin();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        const { email, password } = values;
        login(
            { email: email, password: password },
            {
                onSuccess: () => {
                    form.resetFields();
                },
            }
        );
    };
    return (
        <div className='h-screen relative'>
            <Spin spinning={isLoging} size='large' fullscreen />
            <Card className='border-stone-600 w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center align-middle'>
                <h1 className='tracking-wide text-center mb-11'>
                    Please login to continue
                </h1>
                <Form
                    form={form}
                    disabled={isLoging}
                    name='normal_login'
                    className='login-form w-[400px] mt-6 mx-4'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        required
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please fill Email!',
                            },
                            {
                                type: 'email',
                                message: 'Please fill a valid email',
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            prefix={<UserOutlined />}
                            placeholder='Email'
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            size='large'
                            prefix={<LockOutlined className='site-form-item-icon' />}
                            type='password'
                            placeholder='Password'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Flex justify='space-between' align='center'>
                            <Form.Item name='remember' valuePropName='checked' noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Button onClick={openForget} type='link'>
                                Forget password?
                            </Button>
                        </Flex>
                    </Form.Item>

                    <Form.Item className='mt-5'>
                        <Flex vertical align='center' gap={10}>
                            <Button block size='large' type='primary' htmlType='submit'>
                                Log in
                            </Button>
                            <Text>OR</Text>
                            <Button onClick={openReg} type='link'>
                                Register now!
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
