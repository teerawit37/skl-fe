import { useRouter } from 'next/router';
import { Button, IconButton } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthLayout } from '../../components/Layout';
import { useInput } from '../../hooks/useInput';
import AuthService from '../../services/auth.service';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux"
import allActions from '../../redux/actions/index'

import { toast } from 'react-toastify';

const universityList = [
    {
        label: 'มหาวิทยาลัยธรรมศาสตร์',
        value: 'tu'
    },
    {
        label: 'มหาวิทยาลัยจุฬาลงกรณ์',
        value: 'cu'
    },
    {
        label: 'มหาวิทยาลัยศิลปากร',
        value: 'su'
    },
    {
        label: 'มหาวิทยาลัยศรีนครินทรวิโรฒ',
        value: 'swu'
    }
]

function Signin() {
    const router = useRouter()
    const { value: username, onChange: onUsernameChange, validate: userValid } = useInput('');
    const { value: password, onChange: onPasswordChange, validate: passValid } = useInput('');

    const dispatch = useDispatch()

    const { setUser } = bindActionCreators(allActions.userActions, dispatch)

    const handlerSignin = () => {
        validate()
        AuthService.signin(username, password).then(
            (res) => {
                setUser(res.data)
                router.push('/');
                toast.success('you are logged in successfully')
            },
            error => {
                toast.error('username or password is invalid')
            }
        )
    }
    const validate = () => {
        return username !== '' || password !== ''
    }

    return (
        <div className="skl-signin">
            <div className='container d-flex flex-column align-items-center mt-8'>
                {/* signin */}
                <div className="skl-signin__title">Signin</div>
                <div className='skl-signin__container'>
                    <div className="skl-signin__group">
                        <div className="skl-signin__label">Username</div>
                        <div className='d-flex gap-1'>
                            <Input
                                placeholder={'Username'}
                                value={username}
                                onChange={onUsernameChange} />
                        </div>
                        <div className={`skl-signin__hint ${userValid && 'skl-signin__hint--active'}`}>Please input username</div>
                    </div>

                    <div className="skl-signin__group mb-4">
                        <div className="skl-signin__label">Password</div>
                        <div className='d-flex gap-1'>
                            <Input
                                type='password'
                                placeholder={'Password'}
                                value={password}
                                onChange={onPasswordChange} />
                        </div>
                        <div className={`skl-signin__hint ${passValid && 'skl-signin__hint--active'}`}>Please input password</div>

                    </div>
                    <div className='d-flex justify-content-end'>
                        <Button disabled={passValid || userValid} className='skl-signin__btn' onClick={handlerSignin}>Signin</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (state: any) => {
//     return {
//         numOfBooks: state.numOfBooks
//     }
// }

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         addBook: () => dispatch(addBook()),
//         buyBook: () => dispatch(buyBook())
//     }
// }

Signin.layout = AuthLayout

// export default Signin;
export default Signin;
