// 05 - Loops
// A loop repeats code.
// It helps us avoid writing the same line many times.

const topics = ["HTML", "CSS", "JavaScript", "React"];
const topicList = document.getElementById("topicList");

// This for loop starts at index 0.
// It runs while index is less than topics.length.
// index++ increases the index by 1 after every loop.
for (let index = 0; index < topics.length; index++) {
    const topic = topics[index];

    // Create one list item for each topic.
    topicList.innerHTML += `<li>${topic}</li>`;

    console.log("Topic:", topic);
}
