# React-Practical-3

- For this Practical, I have implemented the functionalities for the Todo list. 
- I have divided the webpage into four components 
  - Main or Parent component
  - Navigation Bar
  - Todo List Items
  - Button 
- I have used the date object to implement the date functionality.
- I have used the <strong>styled component</strong> to include the CSS for the components. I have included the global style as well.
- I have used lottie animation which is a JSON-based animation file format that allows you to ship animations on any platform as easily as shipping static assets. 
- I have used toast which are popup messages that are added so as to display a message to a user.
- I have used local storage for storing the list items.

## :white_check_mark: Languages and Tools:
<p align="left"> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
</p>

## :sparkles: Functionalities:
1. When the list is empty, an animation is displayed in the list container.
2. On clicking on the Add(+) button, the input text is visible at the end of the list and the button gets hide.
3. If the user enters some data in the input field and press 'Enter' key the data would be added to the list and a success toast notification would be displayed as 'Task Added Successfully!' at the top.
4. If the user doesn't enter anything in the input field and presses 'Enter' key, then an error toast notification would be displayed as 'Please Enter Something!' at the top.
5. If the user presses the 'Escape' key, the input field is hidden and the Add(+) button appears.
6. The list is scrollable while the date and time are sticky at the top.
7. The list items doesn't get remove on reloading as the list items aare stored in local storage.
8. The list items appear for a particular day only, the next day the list items gets emptied.
9. When the user clicks on the checkbox of a particular list item then that item gets faded and a success toast notification appears as 'Task Completed!' and if the user unchecks it, an information toast notification appears as 'Task Incomplete!' at the top.

## :camera_flash: Snapshot of the Practical
![Screenshot from 2023-05-05 13-42-44](https://user-images.githubusercontent.com/122269010/236459726-cafcf08e-561c-4d98-bcf2-442b31f136ab.png)
![Screenshot from 2023-05-05 13-44-18](https://user-images.githubusercontent.com/122269010/236459755-2642b27b-6980-461d-be92-e340ef601ab3.png)
![Screenshot from 2023-05-05 13-44-38](https://user-images.githubusercontent.com/122269010/236459775-4f30c61e-2a4b-4eab-9b04-84b4a40ed31a.png)
![Screenshot from 2023-05-05 13-46-27](https://user-images.githubusercontent.com/122269010/236459801-e3684c6c-a1f1-45e7-ad0c-e4c4fdfa4a90.png)

## :hammer: Steps to Run the Project
#### 1. Clone the Repository

```
git clone https://github.com/anjali-sim/React-Practical-3.git
```

#### 2. Change the working directory

```
cd React-Practical-3.git
```

#### 3. Install dependencies

```
npm install
```

#### 4. Start the Project

```
npm start
```

#### 5. Open http://localhost:3000/ to see the App in action...

## :rocket: Check Live:
https://645cf88815c1e81c2b3ae03d--cute-hamster-b92a70.netlify.app/
