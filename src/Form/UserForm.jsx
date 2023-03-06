import {useState} from 'react';


const Form = () => {
const [formData, setFormData] = useState({
    name:"",
    email:"",
    age:"",
    employment:"",
    recommendation:"",
    favourites:"",
    isFrontEnd:false,
    isBackEnd:false,
    isDataAnalysis:false,
    comments: ""
})

const handleChange = (event) => {
    const {name, type, value, checked} = event.target

    setFormData(prevFormData => (
        {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
        }
    ))
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
}


return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        value={formData.name}
        placeholder=" Full Name"
        onChange={handleChange}
        />
        <br />
        <br />
        <input 
        type="email"
        name="email"
        value={formData.email}
        placeholder=" Email Address"
        onChange={handleChange}
        />
        <br />
        <br />
        <input 
        type="number"
        name="age"
        value={formData.age}
        placeholder=" Age"
        onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="employment">
            Which option best describe your currentrole?
        </label>
        <br />
        <br />
        <select 
        name="employment" 
        id="employment"
        value={formData.employment}
        onChange={handleChange}
        >
            <option value="">-- Choose --</option>
            <option value="full time job">Full time job</option>
            <option value="full time learner">Full time learner</option>
            <option value="prefer no to say">Prefer not to say</option>
            <option value="Others">Other</option>
        </select>
        <br />
        <br />
        <fieldset>
            <legend>Will you recommend Edge code to a friend?</legend>
        <input 
                type="radio"
                id="maybe"
                name="recommendation"
                value="maybe"
                checked={formData.recommendation === "maybe"}
                onChange={handleChange}
        />
        <label htmlFor="maybe">Maybe</label>
        <br />
        <br />
        <input 
                type="radio"
                id="not sure"
                name="recommendation"
                value="not sure"
                checked={formData.recommendation === "not sure"}
                onChange={handleChange}
                />
                <label htmlFor="not sure">Not sure</label>
        <br />
        <br />
        <input 
                type="radio"
                id="definitely"
                name="recommendation"
                value="definitely"
                checked={formData.recommendation === "definitely"}
                onChange={handleChange}
                />
                <label htmlFor="definitely">Definitely</label>
        </fieldset>
        <br />
        <br />

        <label htmlFor="favourites">What is your Favourite feature of Edge Code?</label>
        <br />
        <br />
        <select 
        name="favourites"
        onChange={handleChange}
        value={formData.favourites} 
        id="favourites"
        >
            <option value="">-- Choose --</option>
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="Open-source community">Open-source community</option>
        </select>
        <br />
        <br />
        <legend>What Best Describe Your Present Role</legend>
        <br />
        <input 
                type="checkbox"
                id="frontEnd"
                name="isFrontEnd" 
                checked={formData.isFrontEnd}
                onChange={handleChange}
        />
        <label htmlFor="frontEnd">Front-end Projects</label>
        <br />
        <br />
        <input 
                type="checkbox"
                id="backEnd"
                name="isBackEnd" 
                checked={formData.isBackEnd}
                onChange={handleChange}
        />
        <label htmlFor="backEnd">Backend Projects</label>
        <br />
        <br />
        <input 
                type="checkbox"
                id="dataAnalysis"
                name="isDataAnalysis" 
                checked={formData.isDataAnalysis}
                onChange={handleChange}
        />
        <label htmlFor="dataAnalysis">Data Analysis</label>
        <br />
        <br />
        <textarea 
        name="comments"
        value={formData.comments}
        onChange={handleChange} 
        id="comments" 
        placeholder="Leave a comment here..."
        cols="70"
        rows="10" 
        />
        <br />
        <br />
        <button>Submit</button>
    </form>
    </>
)

}


export default Form