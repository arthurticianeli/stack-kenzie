# Stack Kenzie

The application offers a solution between coaches and students to create a bank of doubts and answers to be consulted by the students themselves, avoiding the repetition of calls.

It is integrated with the newest libraries such as:

- React
- React Hooks
- Context API
- React Router Dom
- Chakra UI
- React Hook Form
- Yup
- axios
- Json-server
- Json-server-auth


[**Access the Stack Kenzie APP Demonstration**](https://stack-kenzie-beige.vercel.app/)

[**Access the Project UI Figma**](https://www.figma.com/file/W3RmReKyzaUwmSCSspd1zJ/Stack-Kenzie?node-id=0%3A1)

![alt text](https://github.com/arthurticianeli/stack-kenzie/blob/main/src/github-imgs/login-sk.png)

![alt text](https://github.com/arthurticianeli/stack-kenzie/blob/main/src/github-imgs/dash-sk.png)

![alt text](https://github.com/arthurticianeli/stack-kenzie/blob/main/src/github-imgs/duvida-sk.png)


## Installing dependencies

```
yarn
```

## Starting the project

To start the project use this command in your terminal and wait for a few seconds and the project will open a new tab in your browser automatically

```
yarn start
```

# Project development

The backend was made with json-server to provide all end-points:

- Registrar ⇒ “/register”
- Login ⇒ “/login”
- Questões ⇒ “/questions”
- Respostas ⇒ “/answers”
- Comentários ⇒ “/comments”

To make the API requests it was used Axios with Context API to share the data.

The dashboard is a route protected by the token stored in local storage after the login or sign up.

To deal with form and its validations it was used by React Hook Form and Yup to take care of it.

The application have two types of user, coach and student. To acess the coach's account please use:

  - Login: coachkenzie@gmail.com
  - Password: 123456

Coachs can answer the questions and delete comments and posts.

To help the UI it was used Chakra UI
