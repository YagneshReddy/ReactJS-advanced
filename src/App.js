import React from "react";
import Welcome from "./1.components/class/Welcome";
import { WelcomeOne } from "./1.components/class/WelcomeOne";
import Greet from "./1.components/function/Greet";
import { Named } from "./1.components/function/Named";
import LifeCycleA from "./10.life-cycle/LifeCycleA";
import Comments from "./11.api-calls/Comments";
import Todo from "./11.api-calls/Todo";
import User from "./11.api-calls/User";
import UserApi from "./11.api-calls/UserApi";
import UserMongoAPI from "./11.api-calls/UserMongoAPI";
import UserSqlAPI from "./11.api-calls/UserSqlAPI";
import Routing from "./12.routing/Routing";
import ClassCounter from "./13.hooks/ClassCounter";
import HookApi from "./13.hooks/HookApi";
import HookCounter from "./13.hooks/HookCounter";
import HookCounterObject from "./13.hooks/HookCounterObject";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreeting from "./6.conditional-rendering/UserGreeting";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameList from "./7.list-rendering/NameList";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import Inline from "./8.styling/Inline";
import InlineClass from "./8.styling/InlineClass";
import ModuleCSS from "./8.styling/ModuleCSS";
import Stylesheet from "./8.styling/Stylesheet";
import Form from "./9.form-handling.js/Form";
import FormOne from "./9.form-handling.js/FormOne";

function App() {
  function sample(){
    return "Hello"
  }
  return (
    <div>
      <HookApi />
      {/* <HookCounterObject /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <UserSqlAPI /> */}
      {/* <UserMongoAPI /> */}
      {/* <UserApi /> */}
      {/* <Comments /> */}
      {/* <User /> */}
      {/* <Todo /> */}
      {/* <LifeCycleA /> */}
      {/* <FormOne message="This is the best React Form" /> */}
      {/* <Form /> */}
      {/* <ModuleCSS /> */}
      {/* <InlineClass />
      <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> 
      <NameList /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind />
       <FunctionClick /> <br /> */}
     {/* <ClassClick /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greeting title="Mr.Scott" skill="Great Boss" />
      <Greeting title="Mr.Adam" skill="Business Analyst"/>
      <Greeting title="Mr.Tuan" skill="Tech Boss"/>
      <GreetingOne title="Mr.Uma" skill="Javascript Developer" />
      <GreetingTwo title="Mr.Scott" 
                    skill="Great Boss" 
                    sample={sample} 
                    count={2}
                    isAdmin={true}
                    colors = {["red", "blue", "green"]}>
        {/* <Greeting title="Mr.Scott" skill="Great Boss" /> 
        <h1>This is child of Greeting Two</h1>
      </GreetingTwo> */}
      {/* <Greet />
      <Named />
      <Welcome />
      <WelcomeOne />
      <Hello /> */}
    </div>
  );
}

export default App;
