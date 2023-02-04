import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { useBodyClass } from '@/hooks/useBodyClass'
import { useForm } from '@/hooks/useForm'
import { useQuery } from '@/hooks/useQuery'
import { userService } from '@/services/user'
import { regexp, required, confirm, handleError } from '@/utils'
import { message } from 'antd'

export const Account = () => {
    useBodyClass('bg-light')
    const { loading, refetch: registerService } = useQuery({
        enabled: false,
        queryFn: () => userService.register({
            ...formRegister.values,
            redirect: window.location.origin + window.location.pathname
        }),
        limitDuration: 1000
    })

    const formRegister = useForm({
        name: [
            required()
        ],
        username: [
            required(),
            regexp('email')
        ],
        password: [
            required()
        ],
        confirmPassword: [
            confirm('password')
        ]
    }, {
        dependencies: {
            password: ['confirmPassword']
        }
    })

    const onRegister = async () => {
        if (formRegister.validate()) {
            try {
                const res = await registerService()
                message.success(res.message)
            } catch (err) {
                handleError(err)
            }
        }
    }

    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">Returning Customer</h6>
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Field
                                                placeholder="Email Address *"
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <Field
                                                placeholder="Password *"
                                                type="password"
                                            />
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="loginPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Remember */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="loginRemember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group">
                                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                                    Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <a href="./account-personal-info.html" className="btn btn-sm btn-dark" type="submit">
                                                Sign In
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <p className="font-size-sm text-muted mt-5 mb-2 font-light">Tài khoản demo: <b className="text-black">demo@spacedev.com / Spacedev@123</b></p>
                                            <p className="font-size-sm text-muted mt-5 mb-2 font-light text-justify">
                                                Chúng tôi cung cấp cho bạn tài khoản demo vì mục đích học tập, để đảm bảo những người khác có thể sử dụng chung tài khoản chúng tôi sẽ
                                                hạn chế rất nhiều quyền trên tài khoản này ví dụ:  <br />
                                                - Không thay đổi thông tin cá nhân, mật khẩu <br />
                                                - không reset password,... <br /><br />
                                                Để có thể sử dụng toàn bộ chức năng trên website, vui lòng tiến hành <b className="text-black">đăng ký</b> bằng tài khoản email có thật
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">New Customer</h6>
                                {/* Form */}
                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Field
                                                placeholder="Full Name *"
                                                {...formRegister.register('name')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Field
                                                placeholder="Email Address *"
                                                {...formRegister.register('username')}

                                            />

                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Field
                                                placeholder="Password *"
                                                type="password"
                                                {...formRegister.register('password')}

                                            />

                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Field
                                                placeholder="Confirm Password *"
                                                type="password"
                                                {...formRegister.register('confirmPassword')}
                                            />
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group font-size-sm text-muted font-light">
                                                By registering your details, you agree with our Terms &amp; Conditions,
                                                and Privacy and Cookie Policy.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button loading={loading} onClick={onRegister}>Register</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
