import { useState } from 'react'
import PasswordInput from './PasswordInput'

type Props = {
  onSwitchToLogin: () => void
}

function Signup({ onSwitchToLogin }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    alert(`회원가입 완료: ${name} (${email})`)
    onSwitchToLogin()
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit} autoComplete="off">
        <h1>회원가입</h1>

        <label>
          이름
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />
        </label>

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
          <PasswordInput value={password} onChange={setPassword} minLength={6} autoComplete="new-password" />
        </label>

        <label>
          비밀번호 확인
          <PasswordInput value={passwordConfirm} onChange={setPasswordConfirm} minLength={6} autoComplete="new-password" />
        </label>

        <button type="submit" className="auth-button">
          가입하기
        </button>

        <p className="auth-switch">
          이미 계정이 있으신가요?{' '}
          <button type="button" className="link-button" onClick={onSwitchToLogin}>
            로그인
          </button>
        </p>
      </form>
    </div>
  )
}

export default Signup