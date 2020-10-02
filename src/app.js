import { person, sayHello } from "./lib";

const test = () => console.log("testing the dev server");
console.log(person.name);
sayHello("Azmo");

test();

const getPost = async () => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await post.json();
};

getPost().then((post) => console.log(post));
