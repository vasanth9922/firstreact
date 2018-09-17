import React from 'react'
import ReactDOM from 'react-dom'

import MainComponent from './mainComponent';
import SecondComponent from './secondComponent';
import Name from './components/name';
import CommentComponent from './components/commentComponent';
import LifeCycleComponent from './components/lifeCycleComponent'
import FormComponent from './components/forms/formComponent'
import ControlledForm from './components/forms/controlledForm'
import RemoteDataComponent from './apicomponents/remoteDataComponent';

var position = document.getElementById("mainComponent");
var secComPosition = document.getElementById("secondComponent");
var thirdComPosition = document.getElementById("thirdComponent");

ReactDOM.render(
    <div>
        <MainComponent location="chennai">Vasanth</MainComponent>
        <Name fontColor="red" bgColor="blue">Abc</Name>
        <Name fontColor="white" bgColor="black">Def</Name>
        <Name fontColor="pink" bgColor="green">Ghi</Name>
        <SecondComponent location="bangalore">Kumar</SecondComponent>
        <br></br>
    </div>,
    position);

ReactDOM.render(
            <div>
              <CommentComponent name="kumar">wat the hell!!!</CommentComponent>
              <CommentComponent name="suga">its the hell</CommentComponent>
              <CommentComponent name="priya">hel becmes paradise</CommentComponent>
            </div>
            ,secComPosition);

ReactDOM.render(
    <div>
        <LifeCycleComponent></LifeCycleComponent>
        <p></p>
        <FormComponent></FormComponent>
        <ControlledForm></ControlledForm>
        <br></br>
        <RemoteDataComponent></RemoteDataComponent>
    </div>
    ,thirdComPosition);     