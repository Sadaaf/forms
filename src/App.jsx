import React from "react";

class App extends React.Component {
  state = {
    name: "",
    country: "",
    birthday: "",
    bio: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckBox = (event) => this.setState({ agree: event.target.checked });

  handleSkillChange = (event) => {
    if (event.target.checked)
      this.setState({ skills: [...this.state.skills, event.target.value] });
    else {
      const skills = this.state.skills.filter(
        (skill) => skill !== event.target.value
      );
      this.setState({ skills });
    }
  };

  render() {
    const { name, country, birthday, bio, agree, skills } = this.state;
    return (
      <div>
        <input
          className="form-control my-2"
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <select
          className="form-control my-2"
          name="country"
          onChange={this.handleChange}
          value={country}
        >
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
        <textarea
          value={bio}
          onChange={this.handleChange}
          name="bio"
          className="form-control my-2"
          placeholder="Tell me about yourself"
        ></textarea>
        <input
          value={birthday}
          onChange={this.handleChange}
          type="date"
          name="birthday"
          className="form-control my-2"
        ></input>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={this.handleChange}
          />
          other
        </div>
        <div>
          Skills:
          <br />
          <input
            type="checkbox"
            name="skills"
            value="java"
            checked={skills.includes("java")}
            onChange={this.handleSkillChange}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="python"
            checked={skills.includes("python")}
            onChange={this.handleSkillChange}
          />
          Python
          <input
            type="checkbox"
            name="skills"
            value="javascript"
            checked={skills.includes("javascript")}
            onChange={this.handleSkillChange}
          />
          JavaScript
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleCheckBox}
          />{" "}
          I agree
        </div>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Show Data
        </button>
      </div>
    );
  }
}

export default App;
