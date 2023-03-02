import {useState} from 'react'


const SignUpForm = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    return(
        <form>
            <label>
                Name: 
                <input type="text" name="firstname" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <br />
            <label>
                password: 
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <br />
            <label >
                Marital Status: 
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option > Married </option>
                <option>Single </option>
                <option>Devorced </option>
                <option>Searching </option>
            </select>
            </label>
            <br />
            <p>
            <label><input type="radio" name="gender" value={gender} onChange={e => setGender(e.target.value)}/> Male </label>
            <label><input type="radio" name="gender" value={gender} onChange={e => setGender(e.target.value)}/>Female </label>
            </p>
        </form>
    )
}

export default SignUpForm