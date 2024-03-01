import LoginForm from '../features/auth/LoginForm';

const styles = {
    body: {
        backgroundImage: "url('../../public/bg-main.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
};

function Login() {
    return (
        <div style={styles.body}>
            <LoginForm />
        </div>
    );
}

export default Login;
