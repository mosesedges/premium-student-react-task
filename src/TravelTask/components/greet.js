function greeting(name) {
    const date = new Date();
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hour = date.getHours() % 12;
    let greetings = '';
    let timeOfDay = '';
    console.log(hours, ampm)

    if (hours >= 4 && ampm === "am") {
        timeOfDay = "Morning"
    } else if (hours >= 12 && ampm === "pm") {
        timeOfDay = "afternoon"
    } else if (hours >= 5 && ampm === "pm") {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    return (`Good ${timeOfDay} ${name}`)
}

console.log(greeting("Bob"))