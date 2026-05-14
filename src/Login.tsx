import { useState } from 'react'
import PasswordInput from './PasswordInput'

type Props = {
  onSwitchToSignup: () => void
}

function Login({ onSwitchToSignup }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`로그인 시도: ${email}`)
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit} autoComplete="off">
        <h1>로그인</h1>

        <label>
          이메일
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </label>

        <label>
          비밀번호
          <PasswordInput value={password} onChange={setPassword} autoComplete="new-password" />
        </label>

        <button type="submit" className="auth-button">
          로그인
        </button>

        <p className="auth-switch">
          계정이 없으신가요?{' '}
          <button type="button" className="link-button" onClick={onSwitchToSignup}>
            회원가입
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
